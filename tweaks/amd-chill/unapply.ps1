# Disable AMD Chill
# Disables AMD Chill and restores defaults

# Check if AMD GPU is present
$amdGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*AMD*" -or $_.AdapterCompatibility -like "*Radeon*"}
if (-not $amdGPU) {
    Write-Host "No AMD Radeon GPU found. This tweak is not applicable."
    exit 1
}

# Disable AMD Chill
try {
    # Remove AMD graphics chill settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "EnableChill" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "ChillLevel" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "ChillMin" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "ChillMax" -ErrorAction SilentlyContinue
    
    # Remove AMD driver chill settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "ChillEnabled" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "ChillMode" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "ChillThreshold" -ErrorAction SilentlyContinue
    
    # Remove AMD WattMan chill settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\AMDPPM" -Parameters" -Name "ChillMode" -ErrorAction SilentlyContinue
    
    Write-Host "AMD Chill disabled."
} catch {
    Write-Host "Error disabling AMD Chill: $($_.Exception.Message)"
}
