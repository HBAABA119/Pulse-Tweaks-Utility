# Disable News and Interests
# Removes News and Interests widget from taskbar.

try {
    S
    Write-Host "Disable News and Interests Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable News and Interests: $($_.Exception.Message)" -ForegroundColor Red
}

