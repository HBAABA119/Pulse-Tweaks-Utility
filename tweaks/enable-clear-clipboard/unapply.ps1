# Clear Clipboard on Exit
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "ClearClipboardOnExit" -Value 0 -Type DWord
    Write-Host "Clear clipboard on exit reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting clear clipboard: $($_.Exception.Message)" -ForegroundColor Red
}
