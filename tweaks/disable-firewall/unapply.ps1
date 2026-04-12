# Disable Firewall
# Reverts changes made by Disable Firewall

try {
    S
    Write-Host "Disable Firewall Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Firewall: $($_.Exception.Message)" -ForegroundColor Red
}

