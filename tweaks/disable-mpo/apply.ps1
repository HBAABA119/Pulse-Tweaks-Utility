# Disable MPO
# Disables Multi-Plane Overlay to fix flickering and stuttering on some GPUs

# Disable MPO via registry
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Dwm" -Name "OverlayTestMode" -Value 5 -Type DWORD -Force

# Disable MPO for better compatibility
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Dwm" -Name "EnableMPO" -Value 0 -Type DWORD -Force

# Configure graphics settings for better performance
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "MPOEnable" -Value 0 -Type DWORD -Force
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "MPODriverEnable" -Value 0 -Type DWORD -Force

# Disable hardware acceleration for MPO
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "HardwareMPOEnable" -Value 0 -Type DWORD -Force

Write-Host "Multi-Plane Overlay (MPO) disabled for better GPU compatibility."