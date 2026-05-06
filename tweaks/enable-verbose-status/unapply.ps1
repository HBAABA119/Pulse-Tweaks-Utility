# Enable Verbose Startup/Shutdown
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" -Name "VerboseStatus" -Value 0 -Type DWord
    Write-Host "Verbose status messages reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting verbose status: $($_.Exception.Message)" -ForegroundColor Red
}
