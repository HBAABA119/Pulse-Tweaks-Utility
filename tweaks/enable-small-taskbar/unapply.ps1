# Enable Small Taskbar
# Reverts changes made by Enable Small Taskbar

try {
    S
    Write-Host "Enable Small Taskbar Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Enable Small Taskbar: $($_.Exception.Message)" -ForegroundColor Red
}

