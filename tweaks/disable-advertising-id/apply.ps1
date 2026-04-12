# Disable Advertising ID
# Disables Windows advertising ID for better privacy.

try {
    S
    Write-Host "Disable Advertising ID Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Advertising ID: $($_.Exception.Message)" -ForegroundColor Red
}

