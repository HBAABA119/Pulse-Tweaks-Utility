# Enable Small Taskbar
# Enables small icons on taskbar for a cleaner look.

try {
    S
    Write-Host "Enable Small Taskbar Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Enable Small Taskbar: $($_.Exception.Message)" -ForegroundColor Red
}

