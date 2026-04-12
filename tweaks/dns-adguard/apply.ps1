# DNS AdGuard
# Sets DNS to AdGuard for ad-blocking and privacy protection

# Set primary DNS to AdGuard
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses "94.140.14.14","94.140.15.15" -ErrorAction SilentlyContinue
Set-DnsClientServerAddress -InterfaceAlias "Wi-Fi" -ServerAddresses "94.140.14.14","94.140.15.15" -ErrorAction SilentlyContinue

# Configure network adapter DNS settings
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    Set-DnsClientServerAddress -InterfaceAlias $adapter.InterfaceAlias -ServerAddresses "94.140.14.14","94.140.15.15" -ErrorAction SilentlyContinue
}

# Set DNS via registry for system-wide
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "NameServer" -Value "94.140.14.14,94.140.15.15" -Type String -Force

# Configure DNS cache for AdGuard
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "DnsServerList" -Value "94.140.14.14,94.140.15.15" -Type String -Force

# Flush DNS cache to apply changes
Clear-DnsClientCache

# Restart DNS client service
Restart-Service -Name "Dnscache" -Force

Write-Host "DNS set to AdGuard (94.140.14.14, 94.140.15.15) for ad-blocking and privacy."
