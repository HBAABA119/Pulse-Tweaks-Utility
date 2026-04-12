# Disable Windows Recall
# Reverts changes made by Disable Windows Recall

try {
    Remove-Item -Path "HKLM:SOFTWAREPoliciesMicrosoftWindowsWindowsAI" -Recurse -Force

Start-Process "powershell.exe" -ArgumentList "-NoProfile -ExecutionPolicy Bypass -Command `"Write-Host 'Re-enabling Windows Recall...' -ForegroundColor Cyan
    Write-Host 'This may take a while depending on your internet connection. Please wait...' -ForegroundColor Yellow
    try { DISM /Online /Enable-Feature /FeatureName:Recall /NoRestart
    Write-Host 'Windows Recall has been re-enabled successfully.' -ForegroundColor Green } catch { Write-Host 'Failed to re-enable Windows Recall.' -ForegroundColor Red }
    Write-Host 'Press any key to close...'
    $null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')`"" -WindowStyle Normal
    Write-Host "Disable Windows Recall Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Windows Recall: $($_.Exception.Message)" -ForegroundColor Red
}

