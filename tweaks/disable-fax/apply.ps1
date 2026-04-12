# Disable Fax Service
# Disables Fax service for better performance.

try {
    Set-Service -Name Fax -StartupType Disabled -Force
    Stop-Service -Name Fax -Force
    Write-Host "Disable Fax Service Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Fax Service: $($_.Exception.Message)" -ForegroundColor Red
}

