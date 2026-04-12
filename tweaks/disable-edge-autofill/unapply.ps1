# Disable Edge Autofill
# Reverts changes made by Disable Edge Autofill

try {
    S
    Write-Host "Disable Edge Autofill Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Autofill: $($_.Exception.Message)" -ForegroundColor Red
}

