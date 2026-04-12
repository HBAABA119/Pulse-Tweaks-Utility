# Disable Edge Extensions
# Reverts changes made by Disable Edge Extensions

try {
    R
    Write-Host "Disable Edge Extensions Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Extensions: $($_.Exception.Message)" -ForegroundColor Red
}

