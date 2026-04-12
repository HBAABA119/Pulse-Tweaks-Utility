# Legacy Volume Mixer
# Reverts changes made by Legacy Volume Mixer

try {
    S
    Write-Host "Legacy Volume Mixer Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Legacy Volume Mixer: $($_.Exception.Message)" -ForegroundColor Red
}

