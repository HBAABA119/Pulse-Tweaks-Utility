# Disable Ad Tracking
# Disables advertising ID tracking and telemetry.

try {
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Windows Error Reporting" -Name "Disabled" -Value 1 -Type DWord
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\DataCollection" -Name "AllowTelemetry" -Value 0 -Type DWord
    Write-Host "Disable Ad Tracking Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Ad Tracking: $($_.Exception.Message)" -ForegroundColor Red
}

