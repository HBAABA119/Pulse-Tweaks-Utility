# Disable Your Phone
# Removes Your Phone app.

try {
    G
    Write-Host "Disable Your Phone Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Your Phone: $($_.Exception.Message)" -ForegroundColor Red
}

