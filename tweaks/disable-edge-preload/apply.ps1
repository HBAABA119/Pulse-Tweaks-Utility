# Disable Edge Preload
# Disables Edge preload for better performance.

try {
    S
    Write-Host "Disable Edge Preload Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Preload: $($_.Exception.Message)" -ForegroundColor Red
}

