# Disable Task View
# Reverts changes made by Disable Task View

try {
    S
    Write-Host "Disable Task View Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Task View: $($_.Exception.Message)" -ForegroundColor Red
}

