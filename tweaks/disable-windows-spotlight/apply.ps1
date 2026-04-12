# Disable Windows Spotlight
# Disables Windows Spotlight on lock screen and Start menu.

try {
    Set-ItemProperty -Path "HKCU:\SoftwareMicrosoftWindowsCurrentVersion\ContentDeliveryManager" -Name "RotatingLockScreenOverlayEnabled" -Value 0 -Type DWord
    Set-ItemProperty -Path "HKCU:\SoftwareMicrosoftWindowsCurrentVersion\ContentDeliveryManager" -Name "SubscribedContent-338387Enabled" -Value 0 -Type DWord
    Write-Host "Disable Windows Spotlight Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Windows Spotlight: $($_.Exception.Message)" -ForegroundColor Red
}

