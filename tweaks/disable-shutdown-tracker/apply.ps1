# Disable Shutdown Event Tracker
# Disables the shutdown event tracker dialog.

try {
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\Reliability" -Name "ShutdownReasonOn" -Value 0 -Type DWord
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\Reliability" -Name "ShutdownReasonUI" -Value 0 -Type DWord
    Write-Host "Shutdown event tracker disabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error disabling shutdown tracker: $($_.Exception.Message)" -ForegroundColor Red
}
