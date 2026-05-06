# Disable Snap Fill
# Disables automatic window resizing when dragging to screen edges.

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "DockMoving" -Value 0 -Type DWord
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "SnapSizing" -Value 0 -Type DWord
    Write-Host "Snap Fill disabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error disabling Snap Fill: $($_.Exception.Message)" -ForegroundColor Red
}
