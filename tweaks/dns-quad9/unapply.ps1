# Restore DNS Defaults
# Restores DNS settings to default (DHCP/ISP provided)

# Reset DNS to automatic (DHCP)
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ResetServerAddresses -ErrorAction SilentlyContinue
Set-DnsClientServerAddress -InterfaceAlias "Wi-Fi" -ResetServerAddresses -ErrorAction SilentlyContinue

# Reset network adapter DNS settings to automatic
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    Set-DnsClientServerAddress -InterfaceAlias $adapter.InterfaceAlias -ResetServerAddresses -ErrorAction SilentlyContinue
}

# Remove DNS registry settings
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "NameServer" -ErrorAction SilentlyContinue
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "DnsServerList" -ErrorAction SilentlyContinue

# Flush DNS cache
Clear-DnsClientCache

# Restart DNS client service
Restart-Service -Name "Dnscache" -Force

Write-Host "DNS restored to default (DHCP/ISP provided)."
