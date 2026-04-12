# Disable News
# Removes News app.

try {
    G
    Write-Host "Disable News Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable News: $($_.Exception.Message)" -ForegroundColor Red
}

