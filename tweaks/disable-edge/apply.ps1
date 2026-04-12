# Disable Edge
# Removes Microsoft Edge browser.

try {
    G
    Write-Host "Disable Edge Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge: $($_.Exception.Message)" -ForegroundColor Red
}

