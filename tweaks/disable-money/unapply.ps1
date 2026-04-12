# Disable Money
# Reverts changes made by Disable Money

try {
    G
    Write-Host "Disable Money Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Money: $($_.Exception.Message)" -ForegroundColor Red
}

