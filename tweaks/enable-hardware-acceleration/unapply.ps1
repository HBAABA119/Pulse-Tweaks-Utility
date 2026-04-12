# Enable Hardware Acceleration
# Reverts changes made by Enable Hardware Acceleration

try {
    S
    Write-Host "Enable Hardware Acceleration Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Enable Hardware Acceleration: $($_.Exception.Message)" -ForegroundColor Red
}

