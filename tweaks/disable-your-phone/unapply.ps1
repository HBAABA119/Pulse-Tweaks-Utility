# Disable Your Phone
# Reverts changes made by Disable Your Phone

try {
    w
    Write-Host "Disable Your Phone Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Your Phone: $($_.Exception.Message)" -ForegroundColor Red
}

