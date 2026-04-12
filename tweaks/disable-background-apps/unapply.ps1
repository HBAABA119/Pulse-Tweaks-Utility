# Disable Background Apps
# Reverts changes made by Disable Background Apps

try {
    S
    Write-Host "Disable Background Apps Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Background Apps: $($_.Exception.Message)" -ForegroundColor Red
}

