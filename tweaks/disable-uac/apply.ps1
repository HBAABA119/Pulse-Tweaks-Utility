# Disable UAC
# Disables User Account Control for fewer prompts.

try {
    S
    Write-Host "Disable UAC Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable UAC: $($_.Exception.Message)" -ForegroundColor Red
}

