# Disable Fax Service
# Reverts changes made by Disable Fax Service

try {
    S
    Write-Host "Disable Fax Service Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Fax Service: $($_.Exception.Message)" -ForegroundColor Red
}

