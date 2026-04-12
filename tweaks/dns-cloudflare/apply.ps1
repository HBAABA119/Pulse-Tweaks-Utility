# DNS Cloudflare
# Sets DNS to Cloudflare for faster and more private browsing

# Set primary DNS to Cloudflare
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses "1.1.1.1","1.0.0.1" -ErrorAction SilentlyContinue
Set-DnsClientServerAddress -InterfaceAlias "Wi-Fi" -ServerAddresses "1.1.1.1","1.0.0.1" -ErrorAction SilentlyContinue

# Configure network adapter DNS settings
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    Set-DnsClientServerAddress -InterfaceAlias $adapter.InterfaceAlias -ServerAddresses "1.1.1.1","1.0.0.1" -ErrorAction SilentlyContinue
}

# Set DNS via registry for system-wide
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "NameServer" -Value "1.1.1.1,1.0.0.1" -Type String -Force

# Configure DNS cache for Cloudflare
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "DnsServerList" -Value "1.1.1.1,1.0.0.1" -Type String -Force

# Flush DNS cache to apply changes
Clear-DnsClientCache

# Restart DNS client service
Restart-Service -Name "Dnscache" -Force

Write-Host "DNS set to Cloudflare (1.1.1.1, 1.0.0.1) for faster browsing."
