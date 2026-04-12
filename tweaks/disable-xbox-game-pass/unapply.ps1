# Disable Xbox Game Pass
# Reverts changes made by Disable Xbox Game Pass

try {
    w
    Write-Host "Disable Xbox Game Pass Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Xbox Game Pass: $($_.Exception.Message)" -ForegroundColor Red
}

