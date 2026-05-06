# Disable Sticky Keys Popup
# Disables the Sticky Keys popup when pressing Shift 5 times.

try {
    Set-ItemProperty -Path "HKCU:\Control Panel\Accessibility\StickyKeys" -Name "Flags" -Value "506" -Type String
    Write-Host "Sticky Keys popup disabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error disabling Sticky Keys: $($_.Exception.Message)" -ForegroundColor Red
}
