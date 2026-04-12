# Disable Customer Experience
# Reverts changes made by Disable Customer Experience

try {
    Set-Service -Name DiagTrack -StartupType Automatic -Force
    Start-Service -Name DiagTrack -Force
    Write-Host "Disable Customer Experience Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Customer Experience: $($_.Exception.Message)" -ForegroundColor Red
}

