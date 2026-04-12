# Disable System Tray
# Hides system tray icons for a cleaner look.

try {
    S
    Write-Host "Disable System Tray Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable System Tray: $($_.Exception.Message)" -ForegroundColor Red
}

