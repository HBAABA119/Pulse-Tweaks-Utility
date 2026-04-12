# Menu Show Delay Zero
# Removes the delay when opening menus.

Set-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name "MenuShowDelay" -Type String -Value "0"
