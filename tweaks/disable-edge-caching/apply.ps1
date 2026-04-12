# Disable Edge Caching
# Disables Edge disk caching.

try {
    S
    Write-Host "Disable Edge Caching Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Caching: $($_.Exception.Message)" -ForegroundColor Red
}

