# Disable Taskbar Search
# Reverts changes made by Disable Taskbar Search

try {
    S
    Write-Host "Disable Taskbar Search Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Taskbar Search: $($_.Exception.Message)" -ForegroundColor Red
}

