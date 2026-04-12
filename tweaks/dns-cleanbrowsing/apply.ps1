# DNS CleanBrowsing
# Sets DNS to CleanBrowsing for family-safe browsing with content filtering

# Set primary DNS to CleanBrowsing
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses "185.228.168.168","185.228.169.168" -ErrorAction SilentlyContinue
Set-DnsClientServerAddress -InterfaceAlias "Wi-Fi" -ServerAddresses "185.228.168.168","185.228.169.168" -ErrorAction SilentlyContinue

# Configure network adapter DNS settings
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    Set-DnsClientServerAddress -InterfaceAlias $adapter.InterfaceAlias -ServerAddresses "185.228.168.168","185.228.169.168" -ErrorAction SilentlyContinue
}

# Set DNS via registry for system-wide
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "NameServer" -Value "185.228.168.168,185.228.169.168" -Type String -Force

# Configure DNS cache for CleanBrowsing
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "DnsServerList" -Value "185.228.168.168,185.228.169.168" -Type String -Force

# Flush DNS cache to apply changes
Clear-DnsClientCache

# Restart DNS client service
Restart-Service -Name "Dnscache" -Force

Write-Host "DNS set to CleanBrowsing (185.228.168.168, 185.228.169.168) for family-safe browsing."
