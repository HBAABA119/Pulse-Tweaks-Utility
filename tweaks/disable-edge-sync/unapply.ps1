# Disable Edge Sync
# Reverts changes made by Disable Edge Sync

try {
    S
    Write-Host "Disable Edge Sync Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Sync: $($_.Exception.Message)" -ForegroundColor Red
}

