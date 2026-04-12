# Disable Cloud Sync
# Reverts changes made by Disable Cloud Sync

try {
    S
    Write-Host "Disable Cloud Sync Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Cloud Sync: $($_.Exception.Message)" -ForegroundColor Red
}

