# Disable Tips and Tricks
# Reverts changes made by Disable Tips and Tricks

try {
    Set-ItemProperty -Path "HKCU:\SoftwareMicrosoftWindowsCurrentVersion\ContentDeliveryManager" -Name "SubscribedContent-338387Enabled" -Value 1 -Type DWord
    Set-ItemProperty -Path "HKCU:\SoftwareMicrosoftWindowsCurrentVersion\ContentDeliveryManager" -Name "RotatingLockScreenOverlayEnabled" -Value 1 -Type DWord
    Write-Host "Disable Tips and Tricks Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Tips and Tricks: $($_.Exception.Message)" -ForegroundColor Red
}

