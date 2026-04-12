# Disable Network QoS
# Disables Quality of Service and restores defaults

# Disable QoS packet scheduler
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "EnablePMTUDiscovery" -ErrorAction SilentlyContinue

# Restore network throttling to default
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile" -Name "NetworkThrottlingIndex" -ErrorAction SilentlyContinue

# Disable QoS for real-time applications
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Psched\Parameters" -Name "NonBestEffortLimit" -ErrorAction SilentlyContinue

# Remove network adapter QoS settings
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    # Remove QoS settings from network adapter
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Network\{$adapter.PnPDeviceID}\Connection" -Name "MediaStreamingMode" -ErrorAction SilentlyContinue
}

# Restart network services
Restart-Service -Name "Psched" -Force -ErrorAction SilentlyContinue
Restart-Service -Name "NetMan" -Force -ErrorAction SilentlyContinue
