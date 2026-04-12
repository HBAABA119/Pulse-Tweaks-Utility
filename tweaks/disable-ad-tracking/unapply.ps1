# Disable Ad Tracking
# Reverts changes made by Disable Ad Tracking

try {
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Windows Error Reporting" -Name "Disabled" -Value 0 -Type DWord
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\DataCollection" -Name "AllowTelemetry" -Value 1 -Type DWord
    Write-Host "Disable Ad Tracking Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Ad Tracking: $($_.Exception.Message)" -ForegroundColor Red
}

