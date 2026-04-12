# Disable Superfetch
# Disables Superfetch/SysMain service for better SSD performance.

try {
    Set-Service -Name SysMain -StartupType Disabled -Force
    Stop-Service -Name SysMain -Force
    Write-Host "Disable Superfetch Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Superfetch: $($_.Exception.Message)" -ForegroundColor Red
}

