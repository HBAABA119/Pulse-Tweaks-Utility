# Enable God Mode
# Creates a God Mode folder with all Windows settings.

try {
    $desktop = [Environment]::GetFolderPath("Desktop")
    $godModePath = Join-Path $desktop "GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}"
    if (!(Test-Path $godModePath)) {
        New-Item -ItemType Directory -Path $godModePath | Out-Null
        Write-Host "God Mode folder created on Desktop successfully." -ForegroundColor Green
    } else {
        Write-Host "God Mode folder already exists." -ForegroundColor Yellow
    }
} catch {
    Write-Host "Error creating God Mode: $($_.Exception.Message)" -ForegroundColor Red
}
