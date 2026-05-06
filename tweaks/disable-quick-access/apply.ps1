# Disable Quick Access
# Disables Quick Access in File Explorer, opens to This PC instead.

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "LaunchTo" -Value 1 -Type DWord
    Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue
    Write-Host "Quick Access disabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error disabling Quick Access: $($_.Exception.Message)" -ForegroundColor Red
}
