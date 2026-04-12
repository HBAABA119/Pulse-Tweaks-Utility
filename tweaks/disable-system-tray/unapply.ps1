# Disable System Tray
# Reverts changes made by Disable System Tray

try {
    R
    Write-Host "Disable System Tray Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable System Tray: $($_.Exception.Message)" -ForegroundColor Red
}

