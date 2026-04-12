# Disable Cortana
# Removes Cortana assistant for better privacy and performance.

try {
    Get-AppxPackage -AllUsers Microsoft.549981C3F5F10 | Remove-AppxPackage -ErrorAction SilentlyContinue
    Get-AppxPackage -AllUsers *Cortana* | Remove-AppxPackage -ErrorAction SilentlyContinue
    Write-Host "Disable Cortana Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Cortana: $($_.Exception.Message)" -ForegroundColor Red
}

