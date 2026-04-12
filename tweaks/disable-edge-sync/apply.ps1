# Disable Edge Sync
# Disables Edge sync for better privacy.

try {
    S
    Write-Host "Disable Edge Sync Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Sync: $($_.Exception.Message)" -ForegroundColor Red
}

