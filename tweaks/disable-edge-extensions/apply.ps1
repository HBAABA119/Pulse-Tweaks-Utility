# Disable Edge Extensions
# Blocks Edge extensions for better security.

try {
    S
    Write-Host "Disable Edge Extensions Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Extensions: $($_.Exception.Message)" -ForegroundColor Red
}

