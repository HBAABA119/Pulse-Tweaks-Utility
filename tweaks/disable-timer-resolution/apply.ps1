# Disable Timer Resolution
# Disables timer resolution adjustments for better performance

# Disable platform timer resolution for better performance
bcdedit /set useplatformtick yes

# Configure timer resolution settings
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\PriorityControl" -Name "Win32PrioritySeparation" -Value 0 -Type DWORD -Force

# Disable timer resolution for multimedia
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile" -Name "SystemResponsiveness" -Value 0 -Type DWORD -Force

# Configure timer settings for better performance
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Timer" -Name "Resolution" -Value 0 -Type DWORD -Force

Write-Host "Timer resolution adjustments disabled for better performance."