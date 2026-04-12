# Disable Xbox Game Pass
# Removes Xbox Game Pass app.

try {
    G
    Write-Host "Disable Xbox Game Pass Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Xbox Game Pass: $($_.Exception.Message)" -ForegroundColor Red
}

