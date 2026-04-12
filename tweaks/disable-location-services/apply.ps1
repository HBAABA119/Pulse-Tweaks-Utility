# Disable Location Services
# Disables Windows location services for better privacy.

try {
    S
    Write-Host "Disable Location Services Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Location Services: $($_.Exception.Message)" -ForegroundColor Red
}

