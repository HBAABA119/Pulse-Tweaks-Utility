# Disable Cortana
# Reverts changes made by Disable Cortana

try {
    winget install 9NFF4MJ0Q0TN --source msstore --accept-source-agreements --accept-package-agreements
    Write-Host "Disable Cortana Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Cortana: $($_.Exception.Message)" -ForegroundColor Red
}

