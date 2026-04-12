# Detailed BSOD
# Adds detailed information to the Blue Screen of Death (BSOD) screen

Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Control\CrashControl" -Name "Value" -Type DWord -Value 1
