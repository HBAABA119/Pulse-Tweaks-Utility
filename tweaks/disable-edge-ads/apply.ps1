# Disable Edge Ads
# Disables ads in Edge browser.

try {
    S
    Write-Host "Disable Edge Ads Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Ads: $($_.Exception.Message)" -ForegroundColor Red
}

