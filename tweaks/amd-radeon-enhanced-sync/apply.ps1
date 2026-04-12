# AMD Radeon Enhanced Sync
# Enables AMD Radeon enhanced synchronization for smoother gaming

# Check if AMD GPU is present
$amdGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*AMD*" -or $_.AdapterCompatibility -like "*Radeon*"}
if (-not $amdGPU) {
    Write-Host "No AMD Radeon GPU found. This tweak is not applicable."
    exit 1
}

# Enable AMD Radeon Enhanced Sync
try {
    # Configure AMD graphics settings
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "EnhancedSync" -Value 1 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "SyncMode" -Value 2 -Type DWORD -Force -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "EnhancedSyncLevel" -Value 3 -Type DWORD -Force -ErrorAction SilentlyContinue
    
    # Configure AMD driver settings
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "EnhancedSyncEnabled" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "EnhancedSyncMode" -Value 2 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "EnhancedSyncLevel" -Value 3 -Type DWORD -Force
    
    # Configure AMD Radeon Software settings
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Radeon Software" -Name "EnhancedSync" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Radeon Software" -Name "EnhancedSyncMode" -Value 1 -Type DWORD -Force
    
    Write-Host "AMD Radeon Enhanced Sync enabled."
} catch {
    Write-Host "Error enabling AMD Radeon Enhanced Sync: $($_.Exception.Message)"
}
