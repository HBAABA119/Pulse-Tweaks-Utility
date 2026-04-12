# Disable Bluetooth
# Disables Bluetooth service for better performance.

try {
    Set-Service -Name bthserv -StartupType Disabled -Force
    Stop-Service -Name bthserv -Force
    Write-Host "Disable Bluetooth Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Bluetooth: $($_.Exception.Message)" -ForegroundColor Red
}

