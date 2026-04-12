# Disable Hibernate
# Disables hibernate to save disk space.

try {
    p
    Write-Host "Disable Hibernate Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Hibernate: $($_.Exception.Message)" -ForegroundColor Red
}

