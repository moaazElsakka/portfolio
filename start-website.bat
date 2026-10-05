@echo off
title Moaz Mohamed Portfolio Server
set PATH=C:\Users\moazm\AppData\Local\OpenAI\Codex\runtimes\cua_node\426e88130fe66c7e\bin;%PATH%
echo Starting portfolio server...
cd /d "%~dp0"
call npm run dev -- --open
pause
