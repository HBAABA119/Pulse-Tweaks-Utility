# Disable Taskbar Search
# Removes search box from taskbar for a cleaner look.

try {
    S
    Write-Host "Disable Taskbar Search Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Taskbar Search: $($_.Exception.Message)" -ForegroundColor Red
}

