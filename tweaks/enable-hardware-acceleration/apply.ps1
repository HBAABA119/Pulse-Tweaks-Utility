# Enable Hardware Acceleration
# Enables GPU hardware acceleration for UI rendering.

try {
    S
    Write-Host "Enable Hardware Acceleration Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Enable Hardware Acceleration: $($_.Exception.Message)" -ForegroundColor Red
}

