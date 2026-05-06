# Disable Mouse Pointer Shadow
# Disables the shadow effect under the mouse cursor.

try {
    Set-ItemProperty -Path "HKCU:\Control Panel\Cursors" -Name "CursorShadow" -Value 0 -Type DWord
    Write-Host "Mouse pointer shadow disabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error disabling mouse shadow: $($_.Exception.Message)" -ForegroundColor Red
}
