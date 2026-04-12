# Disable Edge Collections
# Disables Edge Collections feature.

try {
    S
    Write-Host "Disable Edge Collections Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Collections: $($_.Exception.Message)" -ForegroundColor Red
}

