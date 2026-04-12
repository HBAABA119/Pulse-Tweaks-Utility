# Disable Animations
# Reverts changes made by Disable Animations

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\VisualEffects" -Name "VisualFXSetting" -Value 0 -Type DWord
    Write-Host "Disable Animations Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Animations: $($_.Exception.Message)" -ForegroundColor Red
}

