# Disable Weather
# Removes Weather app.

try {
    G
    Write-Host "Disable Weather Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Weather: $($_.Exception.Message)" -ForegroundColor Red
}

