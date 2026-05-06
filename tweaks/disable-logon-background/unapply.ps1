# Disable Logon Background Image
# Reverts changes made by the apply script

try {
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\System" -Name "DisableLogonBackgroundImage" -ErrorAction SilentlyContinue
    Write-Host "Logon background image reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting logon background: $($_.Exception.Message)" -ForegroundColor Red
}
