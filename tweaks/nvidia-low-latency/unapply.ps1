# Disable NVIDIA Low Latency Mode
# Disables NVIDIA low latency mode and restores defaults

# Check if NVIDIA GPU is present
$nvidiaGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*NVIDIA*"}
if (-not $nvidiaGPU) {
    Write-Host "No NVIDIA GPU found. This tweak is not applicable."
    exit 1
}

# Disable NVIDIA low latency mode
try {
    # Remove NVIDIA driver low latency settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "LowLatencyMode" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "LatencyMode" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "PreferMaximumPerformance" -ErrorAction SilentlyContinue
    
    # Remove NVIDIA Control Panel low latency settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "LatencyMode" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "LowLatencyMode" -ErrorAction SilentlyContinue
    
    # Remove NVIDIA shader cache settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "ShaderCacheSize" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "ShaderCacheMode" -ErrorAction SilentlyContinue
    
    Write-Host "NVIDIA low latency mode disabled."
} catch {
    Write-Host "Error disabling NVIDIA low latency mode: $($_.Exception.Message)"
}
