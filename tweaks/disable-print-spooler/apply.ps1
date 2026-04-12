# Disable Print Spooler
# Disables Print Spooler service for better performance.

try {
    Set-Service -Name Spooler -StartupType Disabled -Force
    Stop-Service -Name Spooler -Force
    Write-Host "Disable Print Spooler Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Print Spooler: $($_.Exception.Message)" -ForegroundColor Red
}

