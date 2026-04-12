# Set 24-Hour Clock
# Changes clock to display 24-hour format.

Set-ItemProperty -Path "HKCU:\Control Panel\International" -Name "sShortTime" -Value "HH:mm"
Set-ItemProperty -Path "HKCU:\Control Panel\International" -Name "sTimeFormat" -Value "HH:mm:ss"
Stop-Process -Name explorer -Force
