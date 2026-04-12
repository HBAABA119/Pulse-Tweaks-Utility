# Disable Intel GPU Boost
# Disables Intel GPU boost and restores defaults

# Check if Intel GPU is present
$intelGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*Intel*"}
if (-not $intelGPU) {
    Write-Host "No Intel GPU found. This tweak is not applicable."
    exit 1
}

# Disable Intel GPU boost
try {
    # Remove Intel graphics boost settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "EnableBoost" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "BoostMode" -ErrorAction SilentlyContinue
    
    # Remove Intel driver boost settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Intel\GFX" -Name "EnableBoost" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Intel\GFX" -Name "BoostLevel" -ErrorAction SilentlyContinue
    
    # Remove Intel Turbo Boost settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Power" -Name "TurboBoost" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Power" -Name "TurboMode" -ErrorAction SilentlyContinue
    
    Write-Host "Intel GPU boost disabled."
} catch {
    Write-Host "Error disabling Intel GPU boost: $($_.Exception.Message)"
}
