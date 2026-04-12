# Enable Global FSE
# Re-enables Fullscreen Optimizations that were globally disabled

# Set policy to enable FSE globally
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\PolicyManager\default\Experience" -Name "AllowFullscreenOptimizations" -Value 1 -Type DWORD -Force

# Remove additional FSE settings
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\PolicyManager\default\Experience" -Name "FullscreenOptimizations" -ErrorAction SilentlyContinue

# Enable FSE for all applications
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer" -Name "FullscreenOptimizations" -ErrorAction SilentlyContinue

# Restore graphics settings to default
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "TdrLevel" -ErrorAction SilentlyContinue

Write-Host "Fullscreen Optimizations restored globally."