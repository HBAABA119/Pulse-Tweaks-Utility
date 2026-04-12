# Enable MPO
# Re-enables Multi-Plane Overlay that was previously disabled

# Enable MPO via registry
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Dwm" -Name "EnableMPO" -Value 1 -Type DWORD -Force

# Restore graphics settings to default
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "MPOEnable" -ErrorAction SilentlyContinue
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "MPODriverEnable" -ErrorAction SilentlyContinue

# Restore hardware acceleration for MPO
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "HardwareMPOEnable" -ErrorAction SilentlyContinue

Write-Host "Multi-Plane Overlay (MPO) restored to default."