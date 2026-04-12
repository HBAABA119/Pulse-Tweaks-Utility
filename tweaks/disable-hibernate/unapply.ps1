# Disable Hibernate
# Reverts changes made by Disable Hibernate

try {
    p
    Write-Host "Disable Hibernate Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Hibernate: $($_.Exception.Message)" -ForegroundColor Red
}

