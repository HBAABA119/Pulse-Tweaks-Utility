# Disable Edge Analytics
# Reverts changes made by Disable Edge Analytics

try {
    S
    Write-Host "Disable Edge Analytics Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Analytics: $($_.Exception.Message)" -ForegroundColor Red
}

