# Disable Smart Screen
# Reverts changes made by Disable Smart Screen

try {
    S
    Write-Host "Disable Smart Screen Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Smart Screen: $($_.Exception.Message)" -ForegroundColor Red
}

