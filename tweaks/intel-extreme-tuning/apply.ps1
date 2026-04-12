# Intel Extreme Tuning
# Enables Intel extreme performance tuning for maximum GPU performance

# Check if Intel GPU is present
$intelGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*Intel*"}
if (-not $intelGPU) {
    Write-Host "No Intel GPU found. This tweak is not applicable."
    exit 1
}

# Enable Intel extreme tuning
try {
    # Configure Intel graphics settings
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "GfxBoost" -Value 1 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "GfxTurbo" -Value 1 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "PerfMode" -Value 2 -Type DWORD -Force -ErrorAction SilentlyContinue
    
    # Configure Intel driver settings
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Intel\GFX" -Name "ExtremeTuning" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Intel\GFX" -Name "PerformanceLevel" -Value 3 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Intel\GFX" -Name "TurboMode" -Value 3 -Type DWORD -Force
    
    # Configure Intel power settings
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Power" -Name "GfxBoost" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Power" -Name "PerfBoost" -Value 1 -Type DWORD -Force
    
    Write-Host "Intel extreme tuning enabled."
} catch {
    Write-Host "Error enabling Intel extreme tuning: $($_.Exception.Message)"
}
