# Restore NVIDIA Power Defaults
# Restores NVIDIA GPU power settings to default

# Check if NVIDIA GPU is present
$nvidiaGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*NVIDIA*"}
if (-not $nvidiaGPU) {
    Write-Host "No NVIDIA GPU found. This tweak is not applicable."
    exit 1
}

# Restore NVIDIA power settings to default
try {
    # Restore NVIDIA Control Panel registry settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "PowerMizerEnable" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "PowerMizerLevel" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "TdrLevel" -ErrorAction SilentlyContinue
    
    # Restore NVIDIA driver settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "PowerMizerEnable" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "PmLevel" -ErrorAction SilentlyContinue
    
    Write-Host "NVIDIA GPU power mode restored to default."
} catch {
    Write-Host "Error restoring NVIDIA power mode: $($_.Exception.Message)"
}
