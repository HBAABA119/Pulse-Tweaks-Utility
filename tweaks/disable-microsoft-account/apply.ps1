# Disable Microsoft Account
# Disables Microsoft account requirement for local account creation.

try {
    S
    Write-Host "Disable Microsoft Account Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Microsoft Account: $($_.Exception.Message)" -ForegroundColor Red
}

