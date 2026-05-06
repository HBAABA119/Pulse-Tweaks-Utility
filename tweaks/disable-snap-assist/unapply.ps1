# Disable Snap Assist
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "SnapAssist" -Value 1 -Type DWord
    Write-Host "Snap Assist reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting Snap Assist: $($_.Exception.Message)" -ForegroundColor Red
}
