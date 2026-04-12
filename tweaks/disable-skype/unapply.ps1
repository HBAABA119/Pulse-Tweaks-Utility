# Disable Skype
# Reverts changes made by Disable Skype

try {
    w
    Write-Host "Disable Skype Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Skype: $($_.Exception.Message)" -ForegroundColor Red
}

