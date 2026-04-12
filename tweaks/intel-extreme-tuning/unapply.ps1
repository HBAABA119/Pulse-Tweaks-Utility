# Disable Intel Extreme Tuning
# Disables Intel extreme performance tuning and restores defaults

# Check if Intel GPU is present
$intelGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*Intel*"}
if (-not $intelGPU) {
    Write-Host "No Intel GPU found. This tweak is not applicable."
    exit 1
}

# Disable Intel extreme tuning
try {
    # Remove Intel graphics extreme tuning settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "GfxBoost" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "GfxTurbo" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "PerfMode" -ErrorAction SilentlyContinue
    
    # Remove Intel driver extreme tuning settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Intel\GFX" -Name "ExtremeTuning" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Intel\GFX" -Name "PerformanceLevel" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Intel\GFX" -Name "TurboMode" -ErrorAction SilentlyContinue
    
    # Remove Intel power settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Power" -Name "GfxBoost" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Power" -Name "PerfBoost" -ErrorAction SilentlyContinue
    
    Write-Host "Intel extreme tuning disabled."
} catch {
    Write-Host "Error disabling Intel extreme tuning: $($_.Exception.Message)"
}
