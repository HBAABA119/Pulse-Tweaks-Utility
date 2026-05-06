# Enable NumLock on Startup
# Ensures NumLock is turned on when Windows starts.

try {
    Set-ItemProperty -Path "HKCU:\Control Panel\Keyboard" -Name "InitialKeyboardIndicators" -Value "2" -Type String
    Set-ItemProperty -Path "HKU:\.DEFAULT\Control Panel\Keyboard" -Name "InitialKeyboardIndicators" -Value "2" -Type String
    Write-Host "NumLock on startup enabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error enabling NumLock on startup: $($_.Exception.Message)" -ForegroundColor Red
}
