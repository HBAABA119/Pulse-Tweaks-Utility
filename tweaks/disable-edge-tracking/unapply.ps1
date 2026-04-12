# Disable Edge Tracking
# Reverts changes made by Disable Edge Tracking

try {
    S
    Write-Host "Disable Edge Tracking Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Tracking: $($_.Exception.Message)" -ForegroundColor Red
}

