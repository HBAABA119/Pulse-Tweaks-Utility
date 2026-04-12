# Disable Game DVR
# Reverts changes made by Disable Game DVR

try {
    S
    Write-Host "Disable Game DVR Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Game DVR: $($_.Exception.Message)" -ForegroundColor Red
}

