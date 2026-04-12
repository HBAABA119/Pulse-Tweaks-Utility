# Disable Bing Search
# Reverts changes made by Disable Bing Search

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Search" -Name "BingSearchEnabled" -Value 1 -Type DWord
    Write-Host "Disable Bing Search Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Bing Search: $($_.Exception.Message)" -ForegroundColor Red
}

