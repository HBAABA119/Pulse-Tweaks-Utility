# Disable Sleep
# Reverts changes made by Disable Sleep

try {
    powercfg /change standby-timeout-ac 15
    powercfg /change standby-timeout-dc 10
    Write-Host "Disable Sleep Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Sleep: $($_.Exception.Message)" -ForegroundColor Red
}

