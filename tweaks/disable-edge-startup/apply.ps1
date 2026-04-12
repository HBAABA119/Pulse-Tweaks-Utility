# Disable Edge Startup
# Disables Edge from startup

# Remove Edge from startup via registry
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run" -Name "Microsoft Edge Update" -Value "" -Type String -Force

# Disable Edge auto-update and background services
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "AutoUpdateEnabled" -Value 0 -Type DWORD -Force
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "BackgroundServicesEnabled" -Value 0 -Type DWORD -Force

# Configure Edge startup settings
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "PreventFirstRunExperience" -Value 1 -Type DWORD -Force
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "StartupBoostEnabled" -Value 0 -Type DWORD -Force

Write-Host "Edge startup disabled."
