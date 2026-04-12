# Restore NVIDIA Power Limit Defaults
# Restores NVIDIA GPU power limit to default settings

# Check if NVIDIA GPU is present
$nvidiaGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*NVIDIA*"}
if (-not $nvidiaGPU) {
    Write-Host "No NVIDIA GPU found. This tweak is not applicable."
    exit 1
}

# Restore NVIDIA power limit to default
try {
    # Restore power limit restrictions
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "PowerLimit" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "ThermalLimit" -ErrorAction SilentlyContinue
    
    # Restore NVIDIA driver power settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "PowerLimit" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "ThermalLimit" -ErrorAction SilentlyContinue
    
    # Restore power management features
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "DisablePowerManagement" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "DisableDynamicPowerManagement" -ErrorAction SilentlyContinue
    
    Write-Host "NVIDIA GPU power limit restored to default."
} catch {
    Write-Host "Error restoring NVIDIA power limit: $($_.Exception.Message)"
}
