# Disable Smart Screen
# Disables Smart Screen to prevent Windows from blocking unknown apps.

try {
    S
    Write-Host "Disable Smart Screen Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Smart Screen: $($_.Exception.Message)" -ForegroundColor Red
}

