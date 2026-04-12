# Enable Large Taskbar
# Reverts changes made by Enable Large Taskbar

try {
    S
    Write-Host "Enable Large Taskbar Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Enable Large Taskbar: $($_.Exception.Message)" -ForegroundColor Red
}

