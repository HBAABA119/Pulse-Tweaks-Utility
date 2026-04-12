# Disable Xbox Services
# Reverts changes made by Disable Xbox Services

try {
    Get-Service | Where-Object Name -Like \*Xbox*\ | ForEach-Object { Set-Service -Name .Name -StartupType Automatic -Force
    Start-Service -Name .Name -Force }
    Write-Host "Disable Xbox Services Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Xbox Services: $($_.Exception.Message)" -ForegroundColor Red
}

