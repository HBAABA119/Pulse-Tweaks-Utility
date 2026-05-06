# Disable Sticky Keys Popup
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Control Panel\Accessibility\StickyKeys" -Name "Flags" -Value "510" -Type String
    Write-Host "Sticky Keys popup reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting Sticky Keys: $($_.Exception.Message)" -ForegroundColor Red
}
