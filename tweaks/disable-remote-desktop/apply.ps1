# Disable Remote Desktop
# Disables Remote Desktop for better security.

try {
    S
    Write-Host "Disable Remote Desktop Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Remote Desktop: $($_.Exception.Message)" -ForegroundColor Red
}

