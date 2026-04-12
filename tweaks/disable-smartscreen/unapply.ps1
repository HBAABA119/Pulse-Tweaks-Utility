# Disable SmartScreen
# Reverts changes made by Disable SmartScreen

try {
    S
    Write-Host "Disable SmartScreen Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable SmartScreen: $($_.Exception.Message)" -ForegroundColor Red
}

