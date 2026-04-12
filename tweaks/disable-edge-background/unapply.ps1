# Enable Edge Background
# Re-enables Edge background mode that was previously disabled

# Enable Edge background mode via registry
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "BackgroundModeEnabled" -Value 1 -Type DWORD -Force

# Enable Edge background processes
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "BackgroundProcessesEnabled" -Value 1 -Type DWORD -Force

# Configure Edge startup settings
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "PreventBackgroundRunning" -Value 0 -Type DWORD -Force

# Enable Edge background services
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "BackgroundServicesEnabled" -Value 1 -Type DWORD -Force

Write-Host "Edge background mode restored to default."