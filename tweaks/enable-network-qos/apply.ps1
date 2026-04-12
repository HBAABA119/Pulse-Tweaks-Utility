# Enable Network QoS
# Enables Quality of Service for better network performance management

# Enable QoS packet scheduler
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "EnablePMTUDiscovery" -Value 1 -Type DWORD -Force

# Configure QoS for gaming
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile" -Name "NetworkThrottlingIndex" -Value 10 -Type DWORD -Force

# Enable QoS for real-time applications
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Psched" -Parameters" -Name "NonBestEffortLimit" -Value 0 -Type DWORD -Force

# Configure network adapter QoS
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | ForEach-Object {
    $adapter = $_
    # Enable QoS on network adapter
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Network\{$adapter.PnPDeviceID}\Connection" -Name "MediaStreamingMode" -Value 1 -Type DWORD -Force -ErrorAction SilentlyContinue
}

# Restart network services
Restart-Service -Name "Psched" -Force -ErrorAction SilentlyContinue
Restart-Service -Name "NetMan" -Force -ErrorAction SilentlyContinue
