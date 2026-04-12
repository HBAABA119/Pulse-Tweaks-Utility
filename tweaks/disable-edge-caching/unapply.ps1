# Disable Edge Caching
# Reverts changes made by Disable Edge Caching

try {
    R
    Write-Host "Disable Edge Caching Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Caching: $($_.Exception.Message)" -ForegroundColor Red
}

