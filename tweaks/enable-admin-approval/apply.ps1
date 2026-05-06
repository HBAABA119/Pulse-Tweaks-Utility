# Enable Admin Approval Mode
# Ensures Admin Approval Mode is enabled for UAC.

try {
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" -Name "EnableLUA" -Value 1 -Type DWord
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" -Name "ConsentPromptBehaviorAdmin" -Value 2 -Type DWord
    Write-Host "Admin Approval Mode enabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error enabling Admin Approval: $($_.Exception.Message)" -ForegroundColor Red
}
