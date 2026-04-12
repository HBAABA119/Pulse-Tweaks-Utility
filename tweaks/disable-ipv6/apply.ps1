# Disable IPv6
# Disables IPv6 to improve network performance on IPv4-only networks

# Disable IPv6 for all network adapters
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    Disable-NetAdapterBinding -ComponentID ms_tcpip6 -InterfaceAlias $adapter.InterfaceAlias -ErrorAction SilentlyContinue
}

# Disable IPv6 in registry
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip6\Parameters" -Name "DisabledComponents" -Value 255 -Type DWORD -Force

# Disable IPv6 tunnel interfaces
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "DisableIPSourceRouting" -Value 1 -Type DWORD -Force

# Restart network services
Restart-Service -Name "nla" -Force -ErrorAction SilentlyContinue
Restart-Service -Name "netbt" -Force -ErrorAction SilentlyContinue
