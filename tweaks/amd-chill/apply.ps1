# AMD Chill
# Enables AMD Chill technology for smoother gaming performance

# Check if AMD GPU is present
$amdGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*AMD*" -or $_.AdapterCompatibility -like "*Radeon*"}
if (-not $amdGPU) {
    Write-Host "No AMD Radeon GPU found. This tweak is not applicable."
    exit 1
}

# Enable AMD Chill
try {
    # Configure AMD graphics settings
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "EnableChill" -Value 1 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "ChillLevel" -Value 2 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "ChillMin" -Value 60 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "ChillMax" -Value 90 -Type DWORD -Force -ErrorAction SilentlyContinue
    
    # Configure AMD driver settings
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "ChillEnabled" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "ChillMode" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "ChillThreshold" -Value 65 -Type DWORD -Force
    
    # Configure AMD WattMan settings
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\AMDPPM" -Parameters" -Name "ChillMode" -Value 2 -Type DWORD -Force -ErrorAction SilentlyContinue
    
    Write-Host "AMD Chill enabled."
} catch {
    Write-Host "Error enabling AMD Chill: $($_.Exception.Message)"
}
