# Disable OneDrive
# Disables OneDrive from startup.

try {
    S
    Write-Host "Disable OneDrive Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable OneDrive: $($_.Exception.Message)" -ForegroundColor Red
}

