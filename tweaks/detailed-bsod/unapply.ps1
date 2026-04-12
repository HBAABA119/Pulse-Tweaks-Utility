# Detailed BSOD
# Reverts changes made by the apply script

Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Control\CrashControl" -Name "Value" -Type DWord -Value 0
