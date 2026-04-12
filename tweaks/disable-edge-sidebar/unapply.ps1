# Disable Edge Sidebar
# Reverts changes made by Disable Edge Sidebar

try {
    S
    Write-Host "Disable Edge Sidebar Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Sidebar: $($_.Exception.Message)" -ForegroundColor Red
}

