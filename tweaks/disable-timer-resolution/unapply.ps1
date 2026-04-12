# Enable Timer Resolution
# Re-enables timer resolution adjustments that were previously disabled

# Enable platform timer resolution for better performance
bcdedit /deletevalue useplatformtick

# Restore timer resolution settings
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\PriorityControl" -Name "Win32PrioritySeparation" -ErrorAction SilentlyContinue

# Enable timer resolution for multimedia
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile" -Name "SystemResponsiveness" -ErrorAction SilentlyContinue

# Restore timer settings to default
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Timer" -Name "Resolution" -ErrorAction SilentlyContinue

Write-Host "Timer resolution adjustments restored to default."