# Disable Toggle Keys
# Disables Toggle Keys beep when pressing Caps Lock.

try {
    Set-ItemProperty -Path "HKCU:\Control Panel\Accessibility\ToggleKeys" -Name "Flags" -Value "58" -Type String
    Write-Host "Toggle Keys disabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error disabling Toggle Keys: $($_.Exception.Message)" -ForegroundColor Red
}
