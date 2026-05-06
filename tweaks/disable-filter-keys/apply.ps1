# Disable Filter Keys
# Disables Filter Keys accessibility feature.

try {
    Set-ItemProperty -Path "HKCU:\Control Panel\Accessibility\Keyboard Response" -Name "Flags" -Value "122" -Type String
    Write-Host "Filter Keys disabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error disabling Filter Keys: $($_.Exception.Message)" -ForegroundColor Red
}
