# Disable App Suggestions
# Disables app suggestions in Start menu and other places.

try {
    S
    Write-Host "Disable App Suggestions Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable App Suggestions: $($_.Exception.Message)" -ForegroundColor Red
}

