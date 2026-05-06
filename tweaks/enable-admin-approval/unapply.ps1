# Enable Admin Approval Mode
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" -Name "ConsentPromptBehaviorAdmin" -Value 5 -Type DWord
    Write-Host "Admin Approval Mode reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting Admin Approval: $($_.Exception.Message)" -ForegroundColor Red
}
