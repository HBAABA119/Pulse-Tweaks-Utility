# Disable Mixed Reality
# Reverts changes made by Disable Mixed Reality

try {
    G
    Write-Host "Disable Mixed Reality Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Mixed Reality: $($_.Exception.Message)" -ForegroundColor Red
}

