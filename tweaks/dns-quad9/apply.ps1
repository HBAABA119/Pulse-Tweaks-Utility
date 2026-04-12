# DNS Quad9
# Sets DNS to Quad9 for secure and private browsing with malware protection

# Set primary DNS to Quad9
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses "9.9.9.9","149.112.112.112" -ErrorAction SilentlyContinue
Set-DnsClientServerAddress -InterfaceAlias "Wi-Fi" -ServerAddresses "9.9.9.9","149.112.112.112" -ErrorAction SilentlyContinue

# Configure network adapter DNS settings
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    Set-DnsClientServerAddress -InterfaceAlias $adapter.InterfaceAlias -ServerAddresses "9.9.9.9","149.112.112.112" -ErrorAction SilentlyContinue
}

# Set DNS via registry for system-wide
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "NameServer" -Value "9.9.9.9,149.112.112.112" -Type String -Force

# Configure DNS cache for Quad9
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "DnsServerList" -Value "9.9.9.9,149.112.112.112" -Type String -Force

# Flush DNS cache to apply changes
Clear-DnsClientCache

# Restart DNS client service
Restart-Service -Name "Dnscache" -Force

Write-Host "DNS set to Quad9 (9.9.9.9, 149.112.112.112) for secure browsing."
