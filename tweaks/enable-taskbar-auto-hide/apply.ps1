# Enable Taskbar Auto-Hide
# Enables taskbar auto-hide for more screen space.

try {
    S
    Write-Host "Enable Taskbar Auto-Hide Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Enable Taskbar Auto-Hide: $($_.Exception.Message)" -ForegroundColor Red
}

