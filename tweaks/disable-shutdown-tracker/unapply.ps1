# Disable Shutdown Event Tracker
# Reverts changes made by the apply script

try {
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\Reliability" -Name "ShutdownReasonOn" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\Reliability" -Name "ShutdownReasonUI" -ErrorAction SilentlyContinue
    Write-Host "Shutdown event tracker reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting shutdown tracker: $($_.Exception.Message)" -ForegroundColor Red
}
