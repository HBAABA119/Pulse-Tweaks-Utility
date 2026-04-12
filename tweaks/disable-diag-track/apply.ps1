# Disable DiagTrack Service
# Disables Windows Diagnostics Tracking Service for better privacy.

try {
    Set-Service -Name DiagTrack -StartupType Disabled -Force
    Stop-Service -Name DiagTrack -Force
    Write-Host "Disable DiagTrack Service Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable DiagTrack Service: $($_.Exception.Message)" -ForegroundColor Red
}

