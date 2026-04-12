# Disable Tips and Tricks
# Disables Windows tips and tricks notifications.

try {
    Set-ItemProperty -Path "HKCU:\SoftwareMicrosoftWindowsCurrentVersion\ContentDeliveryManager" -Name "SubscribedContent-338387Enabled" -Value 0 -Type DWord
    Set-ItemProperty -Path "HKCU:\SoftwareMicrosoftWindowsCurrentVersion\ContentDeliveryManager" -Name "RotatingLockScreenOverlayEnabled" -Value 0 -Type DWord
    Write-Host "Disable Tips and Tricks Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Tips and Tricks: $($_.Exception.Message)" -ForegroundColor Red
}

