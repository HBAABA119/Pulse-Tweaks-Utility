# Disable Edge Collections
# Reverts changes made by Disable Edge Collections

try {
    S
    Write-Host "Disable Edge Collections Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Collections: $($_.Exception.Message)" -ForegroundColor Red
}

