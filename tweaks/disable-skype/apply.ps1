# Disable Skype
# Removes Skype app.

try {
    G
    Write-Host "Disable Skype Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Skype: $($_.Exception.Message)" -ForegroundColor Red
}

