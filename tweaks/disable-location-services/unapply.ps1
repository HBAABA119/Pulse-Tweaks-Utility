# Disable Location Services
# Reverts changes made by Disable Location Services

try {
    S
    Write-Host "Disable Location Services Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Location Services: $($_.Exception.Message)" -ForegroundColor Red
}

