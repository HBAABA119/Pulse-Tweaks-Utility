# Disable Snap Fill
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "DockMoving" -Value 1 -Type DWord
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "SnapSizing" -Value 1 -Type DWord
    Write-Host "Snap Fill reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting Snap Fill: $($_.Exception.Message)" -ForegroundColor Red
}
