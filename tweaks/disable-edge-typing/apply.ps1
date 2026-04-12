# Disable Edge Typing
# Disables Edge typing features.

try {
    S
    Write-Host "Disable Edge Typing Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Typing: $($_.Exception.Message)" -ForegroundColor Red
}

