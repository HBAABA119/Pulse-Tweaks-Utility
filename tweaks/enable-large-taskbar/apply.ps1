# Enable Large Taskbar
# Enables large icons on taskbar for better visibility.

try {
    S
    Write-Host "Enable Large Taskbar Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Enable Large Taskbar: $($_.Exception.Message)" -ForegroundColor Red
}

