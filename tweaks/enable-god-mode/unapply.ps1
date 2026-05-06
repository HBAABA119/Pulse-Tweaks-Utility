# Enable God Mode
# Removes the God Mode folder

try {
    $desktop = [Environment]::GetFolderPath("Desktop")
    $godModePath = Join-Path $desktop "GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}"
    if (Test-Path $godModePath) {
        Remove-Item -Path $godModePath -Recurse -Force
        Write-Host "God Mode folder removed successfully." -ForegroundColor Green
    } else {
        Write-Host "God Mode folder not found." -ForegroundColor Yellow
    }
} catch {
    Write-Host "Error removing God Mode: $($_.Exception.Message)" -ForegroundColor Red
}
