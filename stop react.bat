@echo off
set PORT=3000

echo Searching for React dev server on port %PORT%...

:: Fetch PID of the process running the port
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%PORT% ^| findstr LISTENING') do (
    set PID=%%a
)

if "%PID%"=="" (
    echo No React server found running on port %PORT%.
    exit
)

echo Found server PID: %PID%
echo Killing server safely...

taskkill /PID %PID% /F >nul 2>&1

echo React dev server on port %PORT% stopped successfully.
exit
