# Colorize Compressed Files
# Shows compressed files in blue color in File Explorer.

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "ShowCompColor" -Value 1 -Type DWord
    Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue
    Write-Host "Compressed files color enabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error enabling compressed files color: $($_.Exception.Message)" -ForegroundColor Red
}
