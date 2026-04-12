# Set 24-Hour Clock
# Reverts changes made by the apply script

Set-ItemProperty -Path "HKCU:\Control Panel\International" -Name "sShortTime" -Value "h:mm tt"
Set-ItemProperty -Path "HKCU:\Control Panel\International" -Name "sTimeFormat" -Value "h:mm:ss tt"
Stop-Process -Name explorer -Force
