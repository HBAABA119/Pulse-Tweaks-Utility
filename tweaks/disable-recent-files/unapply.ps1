# Disable Recent Files
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer" -Name "ShowRecent" -Value 1 -Type DWord
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer" -Name "ShowFrequent" -Value 1 -Type DWord
    Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue
    Write-Host "Recent files reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting recent files: $($_.Exception.Message)" -ForegroundColor Red
}
