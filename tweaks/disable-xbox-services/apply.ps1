# Disable Xbox Services
# Disables all Xbox-related services.

try {
    Get-Service | Where-Object Name -Like " *Xbox*\ | ForEach-Object { Set-Service -Name .Name -StartupType Disabled -Force
    Stop-Service -Name .Name -Force }
    Write-Host "Disable Xbox Services Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Xbox Services: $($_.Exception.Message)" -ForegroundColor Red
}

