# Disable Search Indexing
# Reverts changes made by Disable Search Indexing

try {
    Set-Service -Name WSearch -StartupType Automatic -Force
    Start-Service -Name WSearch -Force
    Write-Host "Disable Search Indexing Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Search Indexing: $($_.Exception.Message)" -ForegroundColor Red
}

