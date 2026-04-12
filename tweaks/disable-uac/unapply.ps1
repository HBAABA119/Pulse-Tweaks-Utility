# Disable UAC
# Reverts changes made by Disable UAC

try {
    S
    Write-Host "Disable UAC Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable UAC: $($_.Exception.Message)" -ForegroundColor Red
}

