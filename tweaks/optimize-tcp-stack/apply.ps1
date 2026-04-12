# Optimize TCP Stack
# Optimizes TCP/IP stack for better network performance

# Set TCP parameters for better performance
netsh int tcp set global autotuninglevel=normal
netsh int tcp set global chimney=enabled
netsh int tcp set global rss=enabled
netsh int tcp set global fastopen=enabled
netsh int tcp set global ecncapability=enabled

# Configure network adapter settings
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    # Disable power saving for network adapter
    powercfg /setdcvalueindex $adapter.InterfaceGuid SUB_SLEEP 0
    powercfg /setacvalueindex $adapter.InterfaceGuid SUB_SLEEP 0
}

# Optimize DNS cache
netsh interface ip set dns "Local Area Connection" dhcp
