# Clear Clipboard on Exit
# Automatically clears clipboard when exiting Windows.

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "ClearClipboardOnExit" -Value 1 -Type DWord
    Write-Host "Clear clipboard on exit enabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error enabling clear clipboard: $($_.Exception.Message)" -ForegroundColor Red
}
