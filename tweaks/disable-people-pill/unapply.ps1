# Disable People Pill
# Reverts changes made by Disable People Pill

try {
    S
    Write-Host "Disable People Pill Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable People Pill: $($_.Exception.Message)" -ForegroundColor Red
}

