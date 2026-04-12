# Disable Edge Certificate
# Reverts changes made by Disable Edge Certificate

try {
    R
    Write-Host "Disable Edge Certificate Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Certificate: $($_.Exception.Message)" -ForegroundColor Red
}

