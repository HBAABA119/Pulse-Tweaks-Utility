# Disable Edge Passwords
# Reverts changes made by Disable Edge Passwords

try {
    S
    Write-Host "Disable Edge Passwords Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Passwords: $($_.Exception.Message)" -ForegroundColor Red
}

