# Disable Logon Background Image
# Disables the background image on the Windows logon screen.

try {
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\System" -Name "DisableLogonBackgroundImage" -Value 1 -Type DWord
    Write-Host "Logon background image disabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error disabling logon background: $($_.Exception.Message)" -ForegroundColor Red
}
