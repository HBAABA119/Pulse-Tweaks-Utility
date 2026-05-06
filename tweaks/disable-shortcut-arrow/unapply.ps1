# Remove Shortcut Arrows
# Reverts changes made by the apply script

try {
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" -Name "29" -ErrorAction SilentlyContinue
    Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue
    Write-Host "Shortcut arrows restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error restoring shortcut arrows: $($_.Exception.Message)" -ForegroundColor Red
}
