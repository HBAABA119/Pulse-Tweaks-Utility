# Disable Web Notifications
# Reverts changes made by Disable Web Notifications

try {
    S
    Write-Host "Disable Web Notifications Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Web Notifications: $($_.Exception.Message)" -ForegroundColor Red
}

