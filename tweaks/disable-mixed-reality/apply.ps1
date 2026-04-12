# Disable Mixed Reality
# Removes Mixed Reality Portal.

try {
    G
    Write-Host "Disable Mixed Reality Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Mixed Reality: $($_.Exception.Message)" -ForegroundColor Red
}

