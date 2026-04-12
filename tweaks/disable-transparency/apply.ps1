# Disable Transparency
# Disables Windows transparency effects for better performance and lower DWM usage.

try {
    S
    Write-Host "Disable Transparency Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Transparency: $($_.Exception.Message)" -ForegroundColor Red
}

