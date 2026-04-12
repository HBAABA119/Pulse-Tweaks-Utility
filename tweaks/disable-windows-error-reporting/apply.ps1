# Disable Windows Error Reporting
# Disables Windows Error Reporting for better privacy.

try {
    S
    Write-Host "Disable Windows Error Reporting Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Windows Error Reporting: $($_.Exception.Message)" -ForegroundColor Red
}

