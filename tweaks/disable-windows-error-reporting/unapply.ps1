# Disable Windows Error Reporting
# Reverts changes made by Disable Windows Error Reporting

try {
    R
    Write-Host "Disable Windows Error Reporting Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Windows Error Reporting: $($_.Exception.Message)" -ForegroundColor Red
}

