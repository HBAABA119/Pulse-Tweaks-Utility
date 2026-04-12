# NVIDIA Power Mode
# Optimizes NVIDIA GPU power settings for maximum performance

# Check if NVIDIA GPU is present
$nvidiaGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*NVIDIA*"}
if (-not $nvidiaGPU) {
    Write-Host "No NVIDIA GPU found. This tweak is not applicable."
    exit 1
}

# Set NVIDIA power preference to maximum performance
try {
    # Use NVIDIA Control Panel registry settings
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "PowerMizerEnable" -Value 0 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "PowerMizerLevel" -Value 1 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "TdrLevel" -Value 0 -Type DWORD -Force -ErrorAction SilentlyContinue
    
    # Configure NVIDIA driver settings
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "PowerMizerEnable" -Value 0 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "PmLevel" -Value 1 -Type DWORD -Force
    
    Write-Host "NVIDIA GPU power mode set to maximum performance."
} catch {
    Write-Host "Error setting NVIDIA power mode: $($_.Exception.Message)"
}
