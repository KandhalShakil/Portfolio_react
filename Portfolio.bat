@echo off
set PORT=3000

:: React dev server ko background + hidden start karo
powershell -WindowStyle Hidden -Command "Start-Process cmd.exe -ArgumentList '/c npm start' -WindowStyle Hidden"

echo Starting React dev server...

:: Wait until server is ready (port 3000 becomes active)
:check
powershell -Command "try { $c = New-Object Net.Sockets.TcpClient('localhost', %PORT%); $c.Close(); exit 0 } catch { exit 1 }"
if %errorlevel% neq 0 (
    ping 127.0.0.1 -n 2 >nul
    goto check
)

echo Server is up! Opening browser...

start http://localhost:%PORT%
exit
