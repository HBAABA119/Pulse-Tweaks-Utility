# Disable Xbox App
# Reverts changes made by Disable Xbox App

try {
    w
    Write-Host "Disable Xbox App Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Xbox App: $($_.Exception.Message)" -ForegroundColor Red
}

