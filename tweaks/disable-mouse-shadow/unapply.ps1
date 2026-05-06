# Disable Mouse Pointer Shadow
# Reverts changes made by the apply script

try {
    Set-ItemProperty -Path "HKCU:\Control Panel\Cursors" -Name "CursorShadow" -Value 1 -Type DWord
    Write-Host "Mouse pointer shadow reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting mouse shadow: $($_.Exception.Message)" -ForegroundColor Red
}
