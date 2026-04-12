# Disable Bing Search
# Disables Bing search integration in Windows Search.

try {
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Search" -Name "BingSearchEnabled" -Value 0 -Type DWord
    Write-Host "Disable Bing Search Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Bing Search: $($_.Exception.Message)" -ForegroundColor Red
}

