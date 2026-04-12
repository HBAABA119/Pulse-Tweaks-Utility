# Disable DiagTrack Service
# Reverts changes made by Disable DiagTrack Service

try {
    Set-Service -Name DiagTrack -StartupType Automatic -Force
    Start-Service -Name DiagTrack -Force
    Write-Host "Disable DiagTrack Service Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable DiagTrack Service: $($_.Exception.Message)" -ForegroundColor Red
}

