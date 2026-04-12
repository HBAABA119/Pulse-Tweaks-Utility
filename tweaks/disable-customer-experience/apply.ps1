# Disable Customer Experience
# Disables Windows Customer Experience Improvement Program.

try {
    Set-Service -Name DiagTrack -StartupType Disabled -Force
    Stop-Service -Name DiagTrack -Force
    Write-Host "Disable Customer Experience Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Customer Experience: $($_.Exception.Message)" -ForegroundColor Red
}

