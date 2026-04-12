# Disable Game DVR
# Disables Game DVR recording for better gaming performance.

try {
    S
    Write-Host "Disable Game DVR Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Game DVR: $($_.Exception.Message)" -ForegroundColor Red
}

