# Disable Animations
# Disables Windows animations for better performance.

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\VisualEffects" -Name "VisualFXSetting" -Value 2 -Type DWord
    Write-Host "Disable Animations Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Animations: $($_.Exception.Message)" -ForegroundColor Red
}

