# Remove Shortcut Arrows
# Removes the arrow overlay from shortcut icons.

try {
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" -Name "29" -Value "%SystemRoot%\System32\shell32.dll,-50" -Type String
    Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue
    Write-Host "Shortcut arrows removed successfully." -ForegroundColor Green
} catch {
    Write-Host "Error removing shortcut arrows: $($_.Exception.Message)" -ForegroundColor Red
}
