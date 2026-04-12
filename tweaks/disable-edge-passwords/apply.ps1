# Disable Edge Passwords
# Disables Edge password manager.

try {
    S
    Write-Host "Disable Edge Passwords Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Passwords: $($_.Exception.Message)" -ForegroundColor Red
}

