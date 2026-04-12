# Enable Taskbar Auto-Hide
# Reverts changes made by Enable Taskbar Auto-Hide

try {
    S
    Write-Host "Enable Taskbar Auto-Hide Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Enable Taskbar Auto-Hide: $($_.Exception.Message)" -ForegroundColor Red
}

