# Disable Edge Background
# Disables Edge running in background

# Disable Edge background mode via registry
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "BackgroundModeEnabled" -Value 0 -Type DWORD -Force

# Disable Edge background processes
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "BackgroundProcessesEnabled" -Value 0 -Type DWORD -Force

# Configure Edge startup settings
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "PreventBackgroundRunning" -Value 1 -Type DWORD -Force

# Disable Edge background services
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "BackgroundServicesEnabled" -Value 0 -Type DWORD -Force

Write-Host "Edge background mode disabled."