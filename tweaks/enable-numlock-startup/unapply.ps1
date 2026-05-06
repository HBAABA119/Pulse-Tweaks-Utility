# Enable NumLock on Startup
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Control Panel\Keyboard" -Name "InitialKeyboardIndicators" -Value "0" -Type String
    Set-ItemProperty -Path "HKU:\.DEFAULT\Control Panel\Keyboard" -Name "InitialKeyboardIndicators" -Value "0" -Type String
    Write-Host "NumLock on startup reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting NumLock on startup: $($_.Exception.Message)" -ForegroundColor Red
}
