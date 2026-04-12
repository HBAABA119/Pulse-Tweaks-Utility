# NVIDIA Sharpening
# Enables NVIDIA image sharpening for better visual clarity

# Check if NVIDIA GPU is present
$nvidiaGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*NVIDIA*"}
if (-not $nvidiaGPU) {
    Write-Host "No NVIDIA GPU found. This tweak is not applicable."
    exit 1
}

# Enable NVIDIA sharpening
try {
    # Configure NVIDIA driver for sharpening
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "ImageSharpening" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "SharpeningLevel" -Value 2 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "SharpeningIntensity" -Value 50 -Type DWORD -Force
    
    # Configure NVIDIA Control Panel settings
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "ImageSharpening" -Value 1 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "SharpeningLevel" -Value 2 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "SharpeningIntensity" -Value 50 -Type DWORD -Force -ErrorAction SilentlyContinue
    
    # Configure NVIDIA Digital Vibrance
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "DigitalVibrance" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "DigitalVibranceLevel" -Value 50 -Type DWORD -Force
    
    Write-Host "NVIDIA sharpening enabled."
} catch {
    Write-Host "Error enabling NVIDIA sharpening: $($_.Exception.Message)"
}
