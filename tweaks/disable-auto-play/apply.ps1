# Disable Auto Play
# Disables Auto Play for external devices.

try {
    S
    Write-Host "Disable Auto Play Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Auto Play: $($_.Exception.Message)" -ForegroundColor Red
}

