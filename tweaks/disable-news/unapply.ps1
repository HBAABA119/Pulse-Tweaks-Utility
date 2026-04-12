# Disable News
# Reverts changes made by Disable News

try {
    G
    Write-Host "Disable News Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable News: $($_.Exception.Message)" -ForegroundColor Red
}

