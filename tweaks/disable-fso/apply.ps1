# Disable Fullscreen Optimizations
# Disables Windows Fullscreen Optimizations for lower latency in games

# Set FSE behavior to disable for all applications
Set-ItemProperty -Path "HKCU:\System\GameConfigStore" -Name "GameDVR_FSEBehavior" -Value 2 -Type DWORD -Force

# Disable FSE via registry for system-wide
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer" -Name "FullscreenOptimizations" -Value 0 -Type DWORD -Force

# Disable FSE for specific game executables
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" -Name "~DISABLEFULLSCREENOPTIMIZATIONS" -Value "" -Type String -Force

# Configure graphics settings for better performance
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "TdrLevel" -Value 0 -Type DWORD -Force
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "TdrDelay" -Value 0 -Type DWORD -Force

Write-Host "Windows Fullscreen Optimizations disabled for lower gaming latency."
