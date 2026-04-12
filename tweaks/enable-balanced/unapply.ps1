# Enable Balanced Power
# Reverts changes made by Enable Balanced Power

try {
    p
    Write-Host "Enable Balanced Power Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Enable Balanced Power: $($_.Exception.Message)" -ForegroundColor Red
}

