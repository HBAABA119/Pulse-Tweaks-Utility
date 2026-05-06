# Disable Remote Assistance
# Disables Windows Remote Assistance feature.

try {
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Remote Assistance" -Name "fAllowToGetHelp" -Value 0 -Type DWord
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Remote Assistance" -Name "fAllowFullControl" -Value 0 -Type DWord
    Write-Host "Remote Assistance disabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error disabling Remote Assistance: $($_.Exception.Message)" -ForegroundColor Red
}
