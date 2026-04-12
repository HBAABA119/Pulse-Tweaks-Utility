# Enable High Performance
# Sets power plan to High Performance mode.

try {
    p
    Write-Host "Enable High Performance Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Enable High Performance: $($_.Exception.Message)" -ForegroundColor Red
}

