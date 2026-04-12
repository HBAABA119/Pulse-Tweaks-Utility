# Disable Weather
# Reverts changes made by Disable Weather

try {
    G
    Write-Host "Disable Weather Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Weather: $($_.Exception.Message)" -ForegroundColor Red
}

