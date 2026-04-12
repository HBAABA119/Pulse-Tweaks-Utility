# Disable Defender
# Disables Windows Defender real-time protection.

try {
    S
    Write-Host "Disable Defender Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Defender: $($_.Exception.Message)" -ForegroundColor Red
}

