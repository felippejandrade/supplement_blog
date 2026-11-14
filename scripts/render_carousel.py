"""Renderiza um carrossel 1080x1350 na paleta do site.
Uso: python3 -I render_carousel.py <logo.png> <slides.json> <pasta_saida>
slides.json: lista de telas {"tag": "Mito 1", "x": "texto riscado" (opc), "h": "titulo com <em>destaque</em>" (opc),
"p": "texto com <b>negrito laranja</b>" (opc), "cta": "Comenta CREATINA" (opc), "s": "texto pequeno" (opc)}
"""
import sys, json, base64, os
from playwright.sync_api import sync_playwright
LOGO, SLIDES, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
CSS = """:root{--navy1:#1F3A5F;--navy2:#132540;--orange:#EA6C1C;--orange2:#F47A37;--muted:#B9C6D8}
*{margin:0;padding:0;box-sizing:border-box}html,body{width:1080px;height:1350px;overflow:hidden;font-family:Poppins,sans-serif;color:#fff}
.s{position:absolute;inset:0;padding:100px 100px 180px 120px;display:flex;flex-direction:column;justify-content:center;background:linear-gradient(180deg,var(--navy1),var(--navy2))}
.s::before{content:"";position:absolute;left:0;top:0;bottom:0;width:17px;background:var(--orange)}
.tag{align-self:flex-start;background:var(--orange);font-weight:700;font-size:37px;letter-spacing:.05em;padding:12px 28px;border-radius:11px;margin-bottom:40px;text-transform:uppercase}
h1{font-weight:700;font-size:110px;line-height:1.08}h1 em{font-style:normal;color:var(--orange2)}
h2{font-weight:700;font-size:80px;line-height:1.1;color:var(--muted);text-decoration:line-through;text-decoration-color:var(--orange);text-decoration-thickness:8px;margin-bottom:40px}
p{font-size:58px;line-height:1.4;font-weight:500}p b{color:var(--orange2);font-weight:700}
.small{font-size:43px;color:var(--muted);margin-top:30px}
.cta{align-self:flex-start;margin-top:50px;background:var(--orange);font-weight:700;font-size:72px;padding:30px 46px;border-radius:22px;text-transform:uppercase}
.ft{position:absolute;left:120px;right:100px;bottom:60px;display:flex;align-items:center;gap:26px}
.ft img{width:96px;height:96px;border-radius:50%}.ft .n{font-weight:700;font-size:40px}.ft .u{font-size:31px;color:var(--muted)}.ft .pg{margin-left:auto;font-weight:600;font-size:36px;color:var(--muted)}"""
slides = json.load(open(SLIDES, encoding="utf-8")); logo = base64.b64encode(open(LOGO, "rb").read()).decode()
os.makedirs(OUT, exist_ok=True)
with sync_playwright() as pw:
    b = pw.chromium.launch(); pg = b.new_page(viewport={"width": 1080, "height": 1350})
    for i, d in enumerate(slides, 1):
        h = '<div class="s">'
        if d.get("tag"): h += f'<span class="tag">{d["tag"]}</span>'
        if d.get("x"): h += f'<h2>{d["x"]}</h2>'
        if d.get("h"): h += f'<h1>{d["h"]}</h1>'
        if d.get("p"): h += f'<p class="{"small" if d.get("h") else ""}">{d["p"]}</p>'
        if d.get("cta"): h += f'<div class="cta">{d["cta"]}</div>'
        if d.get("s"): h += f'<p class="small">{d["s"]}</p>'
        h += f'<div class="ft"><img src="data:image/png;base64,{logo}"><div><div class="n">Muscle Performance BR</div><div class="u">@muscleperformancebr</div></div><span class="pg">{i}/{len(slides)}</span></div></div>'
        pg.set_content(f'<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head><body>{h}</body></html>')
        pg.screenshot(path=f"{OUT}/slide{i}.png")
    b.close()
print(json.dumps({"slides": len(slides), "out": OUT}))
