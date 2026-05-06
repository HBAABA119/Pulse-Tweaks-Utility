# Disable Recent Files
# Disables recent files and folders in File Explorer.

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer" -Name "ShowRecent" -Value 0 -Type DWord
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer" -Name "ShowFrequent" -Value 0 -Type DWord
    Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue
    Write-Host "Recent files disabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error disabling recent files: $($_.Exception.Message)" -ForegroundColor Red
}
