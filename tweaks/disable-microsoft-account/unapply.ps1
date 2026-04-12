# Disable Microsoft Account
# Reverts changes made by Disable Microsoft Account

try {
    R
    Write-Host "Disable Microsoft Account Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Microsoft Account: $($_.Exception.Message)" -ForegroundColor Red
}

