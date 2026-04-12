# Disable Travel
# Removes Travel app.

try {
    G
    Write-Host "Disable Travel Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Travel: $($_.Exception.Message)" -ForegroundColor Red
}

