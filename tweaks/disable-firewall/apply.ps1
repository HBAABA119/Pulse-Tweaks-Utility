# Disable Firewall
# Disables Windows Firewall.

try {
    S
    Write-Host "Disable Firewall Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Firewall: $($_.Exception.Message)" -ForegroundColor Red
}

