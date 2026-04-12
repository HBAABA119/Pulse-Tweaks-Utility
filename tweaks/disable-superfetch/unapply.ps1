# Disable Superfetch
# Reverts changes made by Disable Superfetch

try {
    Set-Service -Name SysMain -StartupType Automatic -Force
    Start-Service -Name SysMain -Force
    Write-Host "Disable Superfetch Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Superfetch: $($_.Exception.Message)" -ForegroundColor Red
}

