# Disable AMD Radeon Anti-Lag
# Disables AMD Radeon Anti-Lag and restores defaults

# Check if AMD GPU is present
$amdGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*AMD*" -or $_.AdapterCompatibility -like "*Radeon*"}
if (-not $amdGPU) {
    Write-Host "No AMD Radeon GPU found. This tweak is not applicable."
    exit 1
}

# Disable AMD Radeon Anti-Lag
try {
    # Remove AMD graphics anti-lag settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "EnableAntiLag" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "AntiLagMode" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "AntiLagLevel" -ErrorAction SilentlyContinue
    
    # Remove AMD driver anti-lag settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "AntiLagEnabled" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "AntiLagMode" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "AntiLagLevel" -ErrorAction SilentlyContinue
    
    # Remove AMD Radeon Software anti-lag settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Radeon Software" -Name "AntiLag" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Radeon Software" -Name "AntiLagMode" -ErrorAction SilentlyContinue
    
    Write-Host "AMD Radeon Anti-Lag disabled."
} catch {
    Write-Host "Error disabling AMD Radeon Anti-Lag: $($_.Exception.Message)"
}
