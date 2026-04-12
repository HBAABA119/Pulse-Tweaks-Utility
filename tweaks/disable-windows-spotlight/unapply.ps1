# Disable Windows Spotlight
# Reverts changes made by Disable Windows Spotlight

try {
    Set-ItemProperty -Path "HKCU:\SoftwareMicrosoftWindowsCurrentVersion\ContentDeliveryManager" -Name "RotatingLockScreenOverlayEnabled" -Value 1 -Type DWord
    Set-ItemProperty -Path "HKCU:\SoftwareMicrosoftWindowsCurrentVersion\ContentDeliveryManager" -Name "SubscribedContent-338387Enabled" -Value 1 -Type DWord
    Write-Host "Disable Windows Spotlight Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Windows Spotlight: $($_.Exception.Message)" -ForegroundColor Red
}

