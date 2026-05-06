# Enable Verbose Startup/Shutdown
# Shows detailed information during Windows startup and shutdown.

try {
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" -Name "VerboseStatus" -Value 1 -Type DWord
    Write-Host "Verbose status messages enabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error enabling verbose status: $($_.Exception.Message)" -ForegroundColor Red
}
