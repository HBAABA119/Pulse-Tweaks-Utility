# Disable Print Spooler
# Reverts changes made by Disable Print Spooler

try {
    Set-Service -Name Spooler -StartupType Automatic -Force
    Start-Service -Name Spooler -Force
    Write-Host "Disable Print Spooler Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Print Spooler: $($_.Exception.Message)" -ForegroundColor Red
}

