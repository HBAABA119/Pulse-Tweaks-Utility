# Disable Screensaver
# Disables screensaver for better performance.

try {
    S
    Write-Host "Disable Screensaver Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Screensaver: $($_.Exception.Message)" -ForegroundColor Red
}

