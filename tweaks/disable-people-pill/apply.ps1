# Disable People Pill
# Removes People pill from taskbar.

try {
    S
    Write-Host "Disable People Pill Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable People Pill: $($_.Exception.Message)" -ForegroundColor Red
}

