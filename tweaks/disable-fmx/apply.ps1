# Legacy Volume Mixer
# Enables the legacy volume mixer instead of the modern one.

try {
    S
    Write-Host "Legacy Volume Mixer Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Legacy Volume Mixer: $($_.Exception.Message)" -ForegroundColor Red
}

