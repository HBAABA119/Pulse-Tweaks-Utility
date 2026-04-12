# Disable Maps
# Reverts changes made by Disable Maps

try {
    G
    Write-Host "Disable Maps Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Maps: $($_.Exception.Message)" -ForegroundColor Red
}

