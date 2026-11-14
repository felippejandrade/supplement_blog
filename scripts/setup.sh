#!/usr/bin/env bash
# Prepara o ambiente da nuvem: voz Kokoro (Apache-2.0) e modelos.
set -e
pip install --break-system-packages -q kokoro-onnx soundfile playwright >/dev/null 2>&1
M="${1:-$HOME/kokoro}"; mkdir -p "$M"
[ -f "$M/kokoro-v1.0.onnx" ] || curl -sSL -o "$M/kokoro-v1.0.onnx" https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
[ -f "$M/voices-v1.0.bin" ] || curl -sSL -o "$M/voices-v1.0.bin" https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
echo "ok $M"
