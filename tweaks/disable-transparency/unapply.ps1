# Disable Transparency
# Reverts changes made by Disable Transparency

try {
    S
    Write-Host "Disable Transparency Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Transparency: $($_.Exception.Message)" -ForegroundColor Red
}

