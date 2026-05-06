# Show File Extensions
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "HideFileExt" -Value 1 -Type DWord
    Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue
    Write-Host "File extensions hidden successfully." -ForegroundColor Green
} catch {
    Write-Host "Error hiding file extensions: $($_.Exception.Message)" -ForegroundColor Red
}
