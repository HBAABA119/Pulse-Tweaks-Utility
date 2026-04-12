# Enable High Performance
# Reverts changes made by Enable High Performance

try {
    p
    Write-Host "Enable High Performance Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Enable High Performance: $($_.Exception.Message)" -ForegroundColor Red
}

