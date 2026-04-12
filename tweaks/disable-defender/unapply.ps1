# Disable Defender
# Reverts changes made by Disable Defender

try {
    S
    Write-Host "Disable Defender Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Defender: $($_.Exception.Message)" -ForegroundColor Red
}

