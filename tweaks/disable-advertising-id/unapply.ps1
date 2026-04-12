# Disable Advertising ID
# Reverts changes made by Disable Advertising ID

try {
    S
    Write-Host "Disable Advertising ID Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Advertising ID: $($_.Exception.Message)" -ForegroundColor Red
}

