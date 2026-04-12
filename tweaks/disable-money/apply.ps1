# Disable Money
# Removes Money app.

try {
    G
    Write-Host "Disable Money Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Money: $($_.Exception.Message)" -ForegroundColor Red
}

