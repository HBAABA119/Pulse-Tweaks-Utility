# Disable Xbox Gamebar
# Reverts changes made by Disable Xbox Gamebar

try {
    Set-ItemProperty -Path "HKCU:\SoftwareMicrosoft\GameBar" -Name "AllowAutoGameMode" -Value 1 -Type DWord
    Set-ItemProperty -Path "HKCU:\SoftwareMicrosoft\GameBar" -Name "AutoGameModeEnabled" -Value 1 -Type DWord
    Write-Host "Disable Xbox Gamebar Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Xbox Gamebar: $($_.Exception.Message)" -ForegroundColor Red
}

