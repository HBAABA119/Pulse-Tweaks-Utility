# Disable Bluetooth
# Reverts changes made by Disable Bluetooth

try {
    Set-Service -Name bthserv -StartupType Automatic -Force
    Start-Service -Name bthserv -Force
    Write-Host "Disable Bluetooth Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Bluetooth: $($_.Exception.Message)" -ForegroundColor Red
}

