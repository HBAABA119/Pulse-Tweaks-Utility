# DNS Google
# Sets DNS to Google for reliable and fast browsing

# Set primary DNS to Google
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses "8.8.8.8","8.8.4.4" -ErrorAction SilentlyContinue
Set-DnsClientServerAddress -InterfaceAlias "Wi-Fi" -ServerAddresses "8.8.8.8","8.8.4.4" -ErrorAction SilentlyContinue

# Configure network adapter DNS settings
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    Set-DnsClientServerAddress -InterfaceAlias $adapter.InterfaceAlias -ServerAddresses "8.8.8.8","8.8.4.4" -ErrorAction SilentlyContinue
}

# Set DNS via registry for system-wide
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "NameServer" -Value "8.8.8.8,8.8.4.4" -Type String -Force

# Configure DNS cache for Google
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "DnsServerList" -Value "8.8.8.8,8.8.4.4" -Type String -Force

# Flush DNS cache to apply changes
Clear-DnsClientCache

# Restart DNS client service
Restart-Service -Name "Dnscache" -Force

Write-Host "DNS set to Google (8.8.8.8, 8.8.4.4) for reliable browsing."
