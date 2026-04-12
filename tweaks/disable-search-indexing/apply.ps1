# Disable Search Indexing
# Disables Windows Search Indexing for better SSD performance and lower resource usage.

try {
    Set-Service -Name WSearch -StartupType Disabled -Force
    Stop-Service -Name WSearch -Force
    Write-Host "Disable Search Indexing Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Search Indexing: $($_.Exception.Message)" -ForegroundColor Red
}

