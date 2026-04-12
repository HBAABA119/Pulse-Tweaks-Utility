# Disable News and Interests
# Reverts changes made by Disable News and Interests

try {
    S
    Write-Host "Disable News and Interests Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable News and Interests: $($_.Exception.Message)" -ForegroundColor Red
}

