# AMD Radeon Anti-Lag
# Enables AMD Radeon Anti-Lag technology for competitive gaming

# Check if AMD GPU is present
$amdGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*AMD*" -or $_.AdapterCompatibility -like "*Radeon*"}
if (-not $amdGPU) {
    Write-Host "No AMD Radeon GPU found. This tweak is not applicable."
    exit 1
}

# Enable AMD Radeon Anti-Lag
try {
    # Configure AMD graphics settings
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "EnableAntiLag" -Value 1 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "AntiLagMode" -Value 2 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "AntiLagLevel" -Value 3 -Type DWORD -Force -ErrorAction SilentlyContinue
    
    # Configure AMD driver settings
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "AntiLagEnabled" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "AntiLagMode" -Value 2 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "AntiLagLevel" -Value 3 -Type DWORD -Force
    
    # Configure AMD Radeon Software settings
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Radeon Software" -Name "AntiLag" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Radeon Software" -Name "AntiLagMode" -Value 1 -Type DWORD -Force
    
    Write-Host "AMD Radeon Anti-Lag enabled."
} catch {
    Write-Host "Error enabling AMD Radeon Anti-Lag: $($_.Exception.Message)"
}
