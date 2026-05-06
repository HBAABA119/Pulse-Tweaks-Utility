# Disable Aero Shake
# Prevents windows from minimizing when shaken.

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "DisallowShaking" -Value 1 -Type DWord
    Write-Host "Disable Aero Shake applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error applying Disable Aero Shake: $($_.Exception.Message)" -ForegroundColor Red
}
