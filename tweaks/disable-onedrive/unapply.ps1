# Disable OneDrive
# Reverts changes made by Disable OneDrive

try {
    S
    Write-Host "Disable OneDrive Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable OneDrive: $($_.Exception.Message)" -ForegroundColor Red
}

