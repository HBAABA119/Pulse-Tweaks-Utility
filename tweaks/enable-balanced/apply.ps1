# Enable Balanced Power
# Sets power plan to Balanced mode.

try {
    p
    Write-Host "Enable Balanced Power Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Enable Balanced Power: $($_.Exception.Message)" -ForegroundColor Red
}

