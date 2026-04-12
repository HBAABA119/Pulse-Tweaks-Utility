# Disable Edge Tracking
# Disables Edge tracking and telemetry.

try {
    S
    Write-Host "Disable Edge Tracking Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Tracking: $($_.Exception.Message)" -ForegroundColor Red
}

