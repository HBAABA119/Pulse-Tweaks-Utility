# Menu Show Delay Zero
# Reverts changes made by the apply script

Set-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name "MenuShowDelay" -Type String -Value "400"
