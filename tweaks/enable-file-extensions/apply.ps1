# Show File Extensions
# Always show file extensions in File Explorer.

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "HideFileExt" -Value 0 -Type DWord
    Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue
    Write-Host "File extensions shown successfully." -ForegroundColor Green
} catch {
    Write-Host "Error showing file extensions: $($_.Exception.Message)" -ForegroundColor Red
}
