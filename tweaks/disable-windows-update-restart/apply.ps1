# Disable Windows Update Restart
# Prevents Windows from automatically restarting for updates.

try {
    S
    Write-Host "Disable Windows Update Restart Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Windows Update Restart: $($_.Exception.Message)" -ForegroundColor Red
}

