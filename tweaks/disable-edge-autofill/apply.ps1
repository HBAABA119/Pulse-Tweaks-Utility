# Disable Edge Autofill
# Disables Edge autofill for better privacy.

try {
    S
    Write-Host "Disable Edge Autofill Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Autofill: $($_.Exception.Message)" -ForegroundColor Red
}

