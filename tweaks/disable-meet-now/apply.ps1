# Disable Meet Now
# Removes Meet Now button from taskbar.

try {
    S
    Write-Host "Disable Meet Now Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Meet Now: $($_.Exception.Message)" -ForegroundColor Red
}

