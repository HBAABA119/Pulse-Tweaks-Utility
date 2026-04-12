# NVIDIA Low Latency Mode
# Enables NVIDIA low latency mode for competitive gaming

# Check if NVIDIA GPU is present
$nvidiaGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*NVIDIA*"}
if (-not $nvidiaGPU) {
    Write-Host "No NVIDIA GPU found. This tweak is not applicable."
    exit 1
}

# Enable NVIDIA low latency mode
try {
    # Configure NVIDIA driver for low latency
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "LowLatencyMode" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "LatencyMode" -Value 2 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "PreferMaximumPerformance" -Value 1 -Type DWORD -Force
    
    # Configure NVIDIA Control Panel settings
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "LatencyMode" -Value 2 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "LowLatencyMode" -Value 1 -Type DWORD -Force -ErrorAction SilentlyContinue
    
    # Configure NVIDIA shader cache settings
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "ShaderCacheSize" -Value 1024 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "ShaderCacheMode" -Value 1 -Type DWORD -Force
    
    Write-Host "NVIDIA low latency mode enabled."
} catch {
    Write-Host "Error enabling NVIDIA low latency mode: $($_.Exception.Message)"
}
