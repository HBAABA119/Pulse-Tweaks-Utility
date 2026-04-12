# Disable Xbox App
# Removes Xbox app.

try {
    G
    Write-Host "Disable Xbox App Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Xbox App: $($_.Exception.Message)" -ForegroundColor Red
}

