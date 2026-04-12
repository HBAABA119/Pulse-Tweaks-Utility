# Disable Web Notifications
# Disables web notifications in browsers.

try {
    S
    Write-Host "Disable Web Notifications Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Web Notifications: $($_.Exception.Message)" -ForegroundColor Red
}

