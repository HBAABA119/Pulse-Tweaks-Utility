# NVIDIA Max Power Limit
# Sets NVIDIA GPU power limit to maximum for peak performance

# Check if NVIDIA GPU is present
$nvidiaGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*NVIDIA*"}
if (-not $nvidiaGPU) {
    Write-Host "No NVIDIA GPU found. This tweak is not applicable."
    exit 1
}

# Set NVIDIA power limit to maximum
try {
    # Remove power limit restrictions
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "PowerLimit" -Value 0 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "ThermalLimit" -Value 0 -Type DWORD -Force -ErrorAction SilentlyContinue
    
    # Configure NVIDIA driver for maximum power
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "PowerLimit" -Value 0 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "ThermalLimit" -Value 0 -Type DWORD -Force
    
    # Disable power management features
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "DisablePowerManagement" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "DisableDynamicPowerManagement" -Value 1 -Type DWORD -Force
    
    Write-Host "NVIDIA GPU power limit set to maximum."
} catch {
    Write-Host "Error setting NVIDIA power limit: $($_.Exception.Message)"
}
