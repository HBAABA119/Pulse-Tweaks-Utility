# Disable Edge Sidebar
# Disables Edge sidebar for cleaner browsing.

try {
    S
    Write-Host "Disable Edge Sidebar Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Sidebar: $($_.Exception.Message)" -ForegroundColor Red
}

