# Disable Auto Play
# Reverts changes made by Disable Auto Play

try {
    S
    Write-Host "Disable Auto Play Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Auto Play: $($_.Exception.Message)" -ForegroundColor Red
}

