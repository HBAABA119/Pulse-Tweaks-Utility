# Disable Edge Shopping
# Reverts changes made by Disable Edge Shopping

try {
    S
    Write-Host "Disable Edge Shopping Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Shopping: $($_.Exception.Message)" -ForegroundColor Red
}

