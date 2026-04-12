# Disable Sports
# Reverts changes made by Disable Sports

try {
    G
    Write-Host "Disable Sports Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Sports: $($_.Exception.Message)" -ForegroundColor Red
}

