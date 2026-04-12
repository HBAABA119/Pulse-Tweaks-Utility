# Disable Meet Now
# Reverts changes made by Disable Meet Now

try {
    S
    Write-Host "Disable Meet Now Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Meet Now: $($_.Exception.Message)" -ForegroundColor Red
}

