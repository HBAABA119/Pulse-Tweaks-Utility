# Global FSE Disable
# Disables Fullscreen Optimizations globally via Policy Manager

# Set policy to disable FSE globally
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\PolicyManager\default\Experience" -Name "AllowFullscreenOptimizations" -Value 0 -Type DWORD -Force

# Configure additional FSE settings
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\PolicyManager\default\Experience" -Name "FullscreenOptimizations" -Value 0 -Type DWORD -Force

# Disable FSE for all applications
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer" -Name "FullscreenOptimizations" -Value 0 -Type DWORD -Force

# Configure graphics settings for better performance
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "TdrLevel" -Value 0 -Type DWORD -Force

Write-Host "Fullscreen Optimizations disabled globally."