# Disable Quick Access
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "LaunchTo" -Value 2 -Type DWord
    Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue
    Write-Host "Quick Access reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting Quick Access: $($_.Exception.Message)" -ForegroundColor Red
}
