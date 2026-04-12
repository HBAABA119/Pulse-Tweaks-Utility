# Disable Edge Preload
# Reverts changes made by Disable Edge Preload

try {
    S
    Write-Host "Disable Edge Preload Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Preload: $($_.Exception.Message)" -ForegroundColor Red
}

