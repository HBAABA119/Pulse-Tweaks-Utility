# Disable Windows Update Restart
# Reverts changes made by Disable Windows Update Restart

try {
    R
    Write-Host "Disable Windows Update Restart Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Windows Update Restart: $($_.Exception.Message)" -ForegroundColor Red
}

