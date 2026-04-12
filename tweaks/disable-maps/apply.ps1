# Disable Maps
# Removes Windows Maps app.

try {
    G
    Write-Host "Disable Maps Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Maps: $($_.Exception.Message)" -ForegroundColor Red
}

