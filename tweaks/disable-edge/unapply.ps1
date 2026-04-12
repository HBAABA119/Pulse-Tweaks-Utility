# Disable Edge
# Reverts changes made by Disable Edge

try {
    w
    Write-Host "Disable Edge Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge: $($_.Exception.Message)" -ForegroundColor Red
}

