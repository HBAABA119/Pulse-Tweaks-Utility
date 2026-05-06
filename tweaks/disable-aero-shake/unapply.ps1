# Disable Aero Shake
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "DisallowShaking" -Value 0 -Type DWord
    Write-Host "Disable Aero Shake reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting Disable Aero Shake: $($_.Exception.Message)" -ForegroundColor Red
}
