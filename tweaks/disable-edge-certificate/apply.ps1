# Disable Edge Certificate
# Disables Edge auto certificate selection.

try {
    S
    Write-Host "Disable Edge Certificate Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Certificate: $($_.Exception.Message)" -ForegroundColor Red
}

