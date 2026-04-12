# Disable Sleep
# Disables sleep mode for always-on performance.

try {
    powercfg /change standby-timeout-ac 0
    powercfg /change standby-timeout-dc 0
    Write-Host "Disable Sleep Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Sleep: $($_.Exception.Message)" -ForegroundColor Red
}

