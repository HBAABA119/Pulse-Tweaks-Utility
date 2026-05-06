# Disable Snap Assist
# Disables the Snap Assist feature when snapping windows.

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "SnapAssist" -Value 0 -Type DWord
    Write-Host "Snap Assist disabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error disabling Snap Assist: $($_.Exception.Message)" -ForegroundColor Red
}
