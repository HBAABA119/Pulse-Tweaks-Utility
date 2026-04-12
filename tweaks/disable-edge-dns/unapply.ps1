# Enable Edge DNS
# Re-enables Edge built-in DNS client that was previously disabled

# Enable Edge built-in DNS client via registry
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "BuiltInDnsClientEnabled" -Value 1 -Type DWORD -Force

# Remove additional DNS registry settings
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "DnsOverHttpsEnabled" -ErrorAction SilentlyContinue
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Edge" -Name "DnsOverHttpsEnabled" -ErrorAction SilentlyContinue

Write-Host "Edge built-in DNS client restored to default."