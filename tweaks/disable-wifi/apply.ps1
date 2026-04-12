# Disable WiFi
# Disables WiFi service for better performance.

try {
    Set-Service -Name WlanSvc -StartupType Disabled -Force
    Stop-Service -Name WlanSvc -Force
    Write-Host "Disable WiFi Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable WiFi: $($_.Exception.Message)" -ForegroundColor Red
}

