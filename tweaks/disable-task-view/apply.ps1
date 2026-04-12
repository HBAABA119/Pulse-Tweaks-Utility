# Disable Task View
# Removes Task View button from taskbar.

try {
    S
    Write-Host "Disable Task View Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Task View: $($_.Exception.Message)" -ForegroundColor Red
}

