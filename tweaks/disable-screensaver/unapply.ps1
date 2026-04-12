# Disable Screensaver
# Reverts changes made by Disable Screensaver

try {
    S
    Write-Host "Disable Screensaver Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Screensaver: $($_.Exception.Message)" -ForegroundColor Red
}

