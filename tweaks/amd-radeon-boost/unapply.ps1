# Disable AMD Radeon Boost
# Disables AMD Radeon boost and restores defaults

# Check if AMD GPU is present
$amdGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*AMD*" -or $_.AdapterCompatibility -like "*Radeon*"}
if (-not $amdGPU) {
    Write-Host "No AMD Radeon GPU found. This tweak is not applicable."
    exit 1
}

# Disable AMD Radeon boost
try {
    # Remove AMD graphics boost settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "EnableUlps" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "PP_SclkDeepSleep" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "PP_MclkDeepSleep" -ErrorAction SilentlyContinue
    
    # Remove AMD driver boost settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "RadeonBoost" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "BoostMode" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "PowerBoost" -ErrorAction SilentlyContinue
    
    # Remove AMD WattMan settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\AMDPPM" -Parameters" -Name "BoostMode" -ErrorAction SilentlyContinue
    
    Write-Host "AMD Radeon boost disabled."
} catch {
    Write-Host "Error disabling AMD Radeon boost: $($_.Exception.Message)"
}
