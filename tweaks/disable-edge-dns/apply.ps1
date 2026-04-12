# Disable Edge DNS
# Disables Edge built-in DNS client

# Disable Edge built-in DNS client via registry
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "BuiltInDnsClientEnabled" -Value 0 -Type DWORD -Force

# Disable Edge DNS via additional registry settings
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "BuiltInDnsClient" -Value 0 -Type DWORD -Force

# Configure Edge network settings
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "DnsOverHttpsEnabled" -Value 0 -Type DWORD -Force

# Disable Edge secure DNS
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "DnsOverHttpsEnabled" -Value 0 -Type DWORD -Force

Write-Host "Edge built-in DNS client disabled."