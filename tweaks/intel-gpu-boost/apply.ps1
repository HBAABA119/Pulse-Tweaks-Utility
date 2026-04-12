# Intel GPU Boost
# Enables Intel GPU boost technology for better performance

# Check if Intel GPU is present
$intelGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*Intel*"}
if (-not $intelGPU) {
    Write-Host "No Intel GPU found. This tweak is not applicable."
    exit 1
}

# Enable Intel GPU boost
try {
    # Configure Intel graphics settings
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "EnableBoost" -Value 1 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "BoostMode" -Value 2 -Type DWORD -Force -ErrorAction SilentlyContinue
    
    # Configure Intel driver settings
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Intel\GFX" -Name "EnableBoost" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Intel\GFX" -Name "BoostLevel" -Value 3 -Type DWORD -Force
    
    # Configure Intel Turbo Boost
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Power" -Name "TurboBoost" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Power" -Name "TurboMode" -Value 2 -Type DWORD -Force
    
    Write-Host "Intel GPU boost enabled."
} catch {
    Write-Host "Error enabling Intel GPU boost: $($_.Exception.Message)"
}
