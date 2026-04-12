# Disable Edge Typing
# Reverts changes made by Disable Edge Typing

try {
    S
    Write-Host "Disable Edge Typing Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Typing: $($_.Exception.Message)" -ForegroundColor Red
}

