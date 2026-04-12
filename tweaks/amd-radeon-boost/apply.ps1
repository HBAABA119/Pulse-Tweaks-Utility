# AMD Radeon Boost
# Enables AMD Radeon boost technology for better gaming performance

# Check if AMD GPU is present
$amdGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*AMD*" -or $_.AdapterCompatibility -like "*Radeon*"}
if (-not $amdGPU) {
    Write-Host "No AMD Radeon GPU found. This tweak is not applicable."
    exit 1
}

# Enable AMD Radeon boost
try {
    # Configure AMD graphics settings
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "EnableUlps" -Value 1 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "PP_SclkDeepSleep" -Value 0 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "PP_MclkDeepSleep" -Value 0 -Type DWORD -Force -ErrorAction SilentlyContinue
    
    # Configure AMD driver settings
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "RadeonBoost" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "BoostMode" -Value 2 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "PowerBoost" -Value 1 -Type DWORD -Force
    
    # Configure AMD WattMan settings
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\AMDPPM" -Parameters" -Name "BoostMode" -Value 2 -Type DWORD -Force -ErrorAction SilentlyContinue
    
    Write-Host "AMD Radeon boost enabled."
} catch {
    Write-Host "Error enabling AMD Radeon boost: $($_.Exception.Message)"
}
