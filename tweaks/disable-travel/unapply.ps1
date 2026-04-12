# Disable Travel
# Reverts changes made by Disable Travel

try {
    G
    Write-Host "Disable Travel Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Travel: $($_.Exception.Message)" -ForegroundColor Red
}

