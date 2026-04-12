# Restore TCP Stack Defaults
# Restores TCP/IP stack to default settings

# Reset TCP parameters to defaults
netsh int tcp set global autotuninglevel=default
netsh int tcp set global chimney=default
netsh int tcp set global rss=default
netsh int tcp set global fastopen=default
netsh int tcp set global ecncapability=default

# Restore network adapter power settings
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    # Restore power saving for network adapter
    powercfg /setdcvalueindex $adapter.InterfaceGuid SUB_SLEEP 1
    powercfg /setacvalueindex $adapter.InterfaceGuid SUB_SLEEP 1
}

# Reset DNS settings to defaults
netsh interface ip set dns "Local Area Connection" dhcp
