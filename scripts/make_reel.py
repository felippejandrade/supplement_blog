"""Gera um Reel 1080x1920 com narracao Kokoro (gratis, Apache-2.0) e legenda sincronizada.
Uso: python3 -I make_reel.py <pasta_modelos_tts> <logo.png> <saida.mp4> <roteiro.json>
A legenda e sincronizada porque cada trecho e narrado separadamente: a duracao do audio
de cada trecho define quanto tempo ele fica na tela.
"""
import sys, os, json, subprocess, base64, tempfile
import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
from playwright.sync_api import sync_playwright

MODELS, LOGO, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
VOICE, SPEED = os.environ.get("VOICE", "pm_alex"), float(os.environ.get("SPEED", "1.08"))

# Roteiro em JSON (4o argumento): lista de blocos
# {"tag": "Erro 1", "h": "Titulo com <em>destaque</em>", "cta": "Comenta CREATINA" (opcional), "say": ["trecho 1", "trecho 2"]}
BEATS = json.load(open(sys.argv[4], encoding="utf-8"))

CSS = """
:root{--navy1:#1F3A5F;--navy2:#132540;--orange:#EA6C1C;--orange2:#F47A37;--white:#fff;--muted:#B9C6D8}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1920px;overflow:hidden;font-family:Poppins,sans-serif;color:#fff}
.s{position:absolute;inset:0;padding:120px 100px 0 130px;background:linear-gradient(180deg,var(--navy1),var(--navy2))}
.s::before{content:"";position:absolute;left:0;top:0;bottom:0;width:18px;background:var(--orange)}
.top{position:absolute;left:130px;right:100px;top:330px}
.tag{display:inline-block;background:var(--orange);font-weight:700;font-size:40px;letter-spacing:.05em;padding:12px 28px;border-radius:12px;margin-bottom:44px;text-transform:uppercase}
h1{font-weight:700;font-size:118px;line-height:1.08}
h1 em{font-style:normal;color:var(--orange2)}
.big{font-size:230px;line-height:1}
.cta{display:inline-block;margin-top:56px;background:var(--orange);font-weight:700;font-size:72px;padding:30px 46px;border-radius:22px;text-transform:uppercase}
.cap{position:absolute;left:90px;right:90px;top:1330px;text-align:center}
.cap span{display:inline;background:#fff;color:var(--navy2);font-weight:700;font-size:74px;line-height:1.5;padding:8px 26px;border-radius:16px;-webkit-box-decoration-break:clone;box-decoration-break:clone}
.ft{position:absolute;left:130px;bottom:90px;display:flex;align-items:center;gap:26px}
.ft img{width:100px;height:100px;border-radius:50%}
.ft .n{font-weight:700;font-size:42px}.ft .u{font-size:32px;color:var(--muted)}
"""

def frame_html(beat, caption, logo_b64):
    tag = f'<span class="tag">{beat["tag"]}</span><br>' if beat.get("tag") else ""
    cta = f'<div class="cta">{beat["cta"]}</div>' if beat.get("cta") else ""
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head><body>
<div class="s"><div class="top">{tag}<h1>{beat['h']}</h1>{cta}</div>
<div class="cap"><span>{caption}</span></div>
<div class="ft"><img src="data:image/png;base64,{logo_b64}"><div><div class="n">Muscle Performance BR</div><div class="u">@muscleperformancebr</div></div></div></div></body></html>"""

def main():
    k = Kokoro(f"{MODELS}/kokoro-v1.0.onnx", f"{MODELS}/voices-v1.0.bin")
    logo_b64 = base64.b64encode(open(LOGO, "rb").read()).decode()
    work = tempfile.mkdtemp(prefix="reel_")
    segs, sr = [], 24000
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": 1080, "height": 1920})
        n = 0
        for bi, beat in enumerate(BEATS):
            for ci, line in enumerate(beat["say"]):
                audio, sr = k.create(line, voice=VOICE, speed=SPEED, lang="pt-br")
                # respiro curto entre trechos e maior no fim de cada bloco
                pad = 0.28 if ci == len(beat["say"]) - 1 else 0.08
                audio = np.concatenate([audio, np.zeros(int(sr * pad), dtype=audio.dtype)])
                wav = f"{work}/a{n:03d}.wav"; sf.write(wav, audio, sr)
                png = f"{work}/f{n:03d}.png"
                pg.set_content(frame_html(beat, line, logo_b64)); pg.screenshot(path=png)
                segs.append((png, wav, len(audio) / sr)); n += 1
        b.close()
    # segmento de video por trecho, depois concatena
    parts = []
    for i, (png, wav, dur) in enumerate(segs):
        mp4 = f"{work}/s{i:03d}.mp4"
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-loop", "1", "-i", png, "-i", wav,
                        "-t", f"{dur:.3f}", "-r", "30", "-c:v", "libx264", "-preset", "veryfast", "-crf", "20",
                        "-pix_fmt", "yuv420p", "-c:a", "aac", "-ar", "44100", "-ac", "2", mp4], check=True)
        parts.append(mp4)
    lst = f"{work}/list.txt"
    open(lst, "w").write("".join(f"file '{m}'\n" for m in parts))
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", lst,
                    "-c", "copy", "-movflags", "+faststart", OUT], check=True)
    print(json.dumps({"out": OUT, "segments": len(segs), "seconds": round(sum(s[2] for s in segs), 1)}))

if __name__ == "__main__":
    main()
