# Disable Toggle Keys
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Control Panel\Accessibility\ToggleKeys" -Name "Flags" -Value "62" -Type String
    Write-Host "Toggle Keys reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting Toggle Keys: $($_.Exception.Message)" -ForegroundColor Red
}
