# Disable Remote Assistance
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Remote Assistance" -Name "fAllowToGetHelp" -Value 1 -Type DWord
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Remote Assistance" -Name "fAllowFullControl" -Value 1 -Type DWord
    Write-Host "Remote Assistance reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting Remote Assistance: $($_.Exception.Message)" -ForegroundColor Red
}
