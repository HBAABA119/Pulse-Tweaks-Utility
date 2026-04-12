# Disable Startup Apps
# Reverts changes made by Disable Startup Apps

try {
    G
    Write-Host "Disable Startup Apps Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Startup Apps: $($_.Exception.Message)" -ForegroundColor Red
}

