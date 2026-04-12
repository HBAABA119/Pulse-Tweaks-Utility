# Enable Edge Startup
# Re-enables Edge startup that was previously disabled

# Restore Edge to startup via registry
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run" -Name "Microsoft Edge Update" -Value "msedge.exe --no-startup-window" -Type String -Force

# Enable Edge auto-update and background services
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "AutoUpdateEnabled" -ErrorAction SilentlyContinue
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "BackgroundServicesEnabled" -ErrorAction SilentlyContinue

# Restore Edge startup settings
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "PreventFirstRunExperience" -ErrorAction SilentlyContinue
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "StartupBoostEnabled" -ErrorAction SilentlyContinue

Write-Host "Edge startup restored to default."
