# Disable Startup Apps
# Disables all startup applications for faster boot times.

try {
    G
    Write-Host "Disable Startup Apps Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Startup Apps: $($_.Exception.Message)" -ForegroundColor Red
}

