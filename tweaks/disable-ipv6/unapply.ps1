# Enable IPv6
# Re-enables IPv6 that was previously disabled

# Enable IPv6 for all network adapters
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    Enable-NetAdapterBinding -ComponentID ms_tcpip6 -InterfaceAlias $adapter.InterfaceAlias -ErrorAction SilentlyContinue
}

# Remove IPv6 registry modifications
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip6\Parameters" -Name "DisabledComponents" -ErrorAction SilentlyContinue
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "DisableIPSourceRouting" -ErrorAction SilentlyContinue

# Restart network services
Restart-Service -Name "nla" -Force -ErrorAction SilentlyContinue
Restart-Service -Name "netbt" -Force -ErrorAction SilentlyContinue
