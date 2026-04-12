# Disable Edge Analytics
# Disables Edge analytics and metrics.

try {
    S
    Write-Host "Disable Edge Analytics Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Analytics: $($_.Exception.Message)" -ForegroundColor Red
}

