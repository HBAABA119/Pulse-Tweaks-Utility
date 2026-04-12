# Disable Sports
# Removes Sports app.

try {
    G
    Write-Host "Disable Sports Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Sports: $($_.Exception.Message)" -ForegroundColor Red
}

