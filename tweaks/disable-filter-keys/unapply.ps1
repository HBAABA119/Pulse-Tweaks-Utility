# Disable Filter Keys
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Control Panel\Accessibility\Keyboard Response" -Name "Flags" -Value "126" -Type String
    Write-Host "Filter Keys reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting Filter Keys: $($_.Exception.Message)" -ForegroundColor Red
}
