# Disable Xbox Gamebar
# Disables Xbox Gamebar and Game DVR for better performance.

try {
    Set-ItemProperty -Path "HKCU:\SoftwareMicrosoft\GameBar" -Name "AllowAutoGameMode" -Value 0 -Type DWord
    Set-ItemProperty -Path "HKCU:\SoftwareMicrosoft\GameBar" -Name "AutoGameModeEnabled" -Value 0 -Type DWord
    Write-Host "Disable Xbox Gamebar Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Xbox Gamebar: $($_.Exception.Message)" -ForegroundColor Red
}

