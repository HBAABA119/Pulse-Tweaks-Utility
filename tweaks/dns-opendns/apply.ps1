# DNS OpenDNS
# Sets DNS to OpenDNS for family-safe browsing with content filtering

# Set primary DNS to OpenDNS FamilyShield
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses "208.67.222.222","208.67.220.220" -ErrorAction SilentlyContinue
Set-DnsClientServerAddress -InterfaceAlias "Wi-Fi" -ServerAddresses "208.67.222.222","208.67.220.220" -ErrorAction SilentlyContinue

# Configure network adapter DNS settings
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    Set-DnsClientServerAddress -InterfaceAlias $adapter.InterfaceAlias -ServerAddresses "208.67.222.222","208.67.220.220" -ErrorAction SilentlyContinue
}

# Set DNS via registry for system-wide
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "NameServer" -Value "208.67.222.222,208.67.220.220" -Type String -Force

# Configure DNS cache for OpenDNS
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "DnsServerList" -Value "208.67.222.222,208.67.220.220" -Type String -Force

# Flush DNS cache to apply changes
Clear-DnsClientCache

# Restart DNS client service
Restart-Service -Name "Dnscache" -Force

Write-Host "DNS set to OpenDNS FamilyShield (208.67.222.222, 208.67.220.220) for family-safe browsing."
