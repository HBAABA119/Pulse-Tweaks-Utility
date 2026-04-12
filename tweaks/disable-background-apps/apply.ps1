# Disable Background Apps
# Disables apps from running in the background for better performance.

try {
    S
    Write-Host "Disable Background Apps Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Background Apps: $($_.Exception.Message)" -ForegroundColor Red
}

