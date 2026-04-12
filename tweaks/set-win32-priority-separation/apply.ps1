# Set Win32 Priority Separation
# Optimizes foreground app performance by modifying system process priority behavior.

Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\PriorityControl" -Name "Win32PrioritySeparation" -Type DWord -Value 36
