# Enable Fullscreen Optimizations
# Re-enables Windows Fullscreen Optimizations that were previously disabled

# Set FSE behavior to enable for all applications
Set-ItemProperty -Path "HKCU:\System\GameConfigStore" -Name "GameDVR_FSEBehavior" -Value 0 -Type DWORD -Force

# Enable FSE via registry for system-wide
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer" -Name "FullscreenOptimizations" -ErrorAction SilentlyContinue

# Enable FSE for specific game executables
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" -Name "~DISABLEFULLSCREENOPTIMIZATIONS" -ErrorAction SilentlyContinue

# Restore graphics settings to default
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "TdrLevel" -ErrorAction SilentlyContinue
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "TdrDelay" -ErrorAction SilentlyContinue

Write-Host "Windows Fullscreen Optimizations restored to default."
