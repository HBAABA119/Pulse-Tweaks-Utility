# Disable WiFi
# Reverts changes made by Disable WiFi

try {
    Set-Service -Name WlanSvc -StartupType Automatic -Force
    Start-Service -Name WlanSvc -Force
    Write-Host "Disable WiFi Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable WiFi: $($_.Exception.Message)" -ForegroundColor Red
}

