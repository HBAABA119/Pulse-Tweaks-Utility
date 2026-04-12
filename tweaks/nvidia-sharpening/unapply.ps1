# Disable NVIDIA Sharpening
# Disables NVIDIA image sharpening and restores defaults

# Check if NVIDIA GPU is present
$nvidiaGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*NVIDIA*"}
if (-not $nvidiaGPU) {
    Write-Host "No NVIDIA GPU found. This tweak is not applicable."
    exit 1
}

# Disable NVIDIA sharpening
try {
    # Remove NVIDIA driver sharpening settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "ImageSharpening" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "SharpeningLevel" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "SharpeningIntensity" -ErrorAction SilentlyContinue
    
    # Remove NVIDIA Control Panel sharpening settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "ImageSharpening" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "SharpeningLevel" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "SharpeningIntensity" -ErrorAction SilentlyContinue
    
    # Remove NVIDIA Digital Vibrance settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "DigitalVibrance" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "DigitalVibranceLevel" -ErrorAction SilentlyContinue
    
    Write-Host "NVIDIA sharpening disabled."
} catch {
    Write-Host "Error disabling NVIDIA sharpening: $($_.Exception.Message)"
}
