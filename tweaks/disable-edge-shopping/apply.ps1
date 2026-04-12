# Disable Edge Shopping
# Disables Edge shopping features.

try {
    S
    Write-Host "Disable Edge Shopping Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Shopping: $($_.Exception.Message)" -ForegroundColor Red
}

