# Disable Cloud Sync
# Disables Windows cloud sync settings for better privacy.

try {
    S
    Write-Host "Disable Cloud Sync Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Cloud Sync: $($_.Exception.Message)" -ForegroundColor Red
}

