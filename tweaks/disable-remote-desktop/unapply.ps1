# Disable Remote Desktop
# Reverts changes made by Disable Remote Desktop

try {
    S
    Write-Host "Disable Remote Desktop Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Remote Desktop: $($_.Exception.Message)" -ForegroundColor Red
}

