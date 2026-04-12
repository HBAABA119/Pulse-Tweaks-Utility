# Disable SmartScreen
# Disables Windows SmartScreen filter.

try {
    S
    Write-Host "Disable SmartScreen Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable SmartScreen: $($_.Exception.Message)" -ForegroundColor Red
}

