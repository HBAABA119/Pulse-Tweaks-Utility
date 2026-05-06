# Colorize Compressed Files
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "ShowCompColor" -Value 0 -Type DWord
    Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue
    Write-Host "Compressed files color reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting compressed files color: $($_.Exception.Message)" -ForegroundColor Red
}
