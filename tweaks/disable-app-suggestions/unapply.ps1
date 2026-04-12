# Disable App Suggestions
# Reverts changes made by Disable App Suggestions

try {
    S
    Write-Host "Disable App Suggestions Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable App Suggestions: $($_.Exception.Message)" -ForegroundColor Red
}

