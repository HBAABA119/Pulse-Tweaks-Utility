# Disable AMD Radeon Enhanced Sync
# Disables AMD Radeon enhanced synchronization and restores defaults

# Check if AMD GPU is present
$amdGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*AMD*" -or $_.AdapterCompatibility -like "*Radeon*"}
if (-not $amdGPU) {
    Write-Host "No AMD Radeon GPU found. This tweak is not applicable."
    exit 1
}

# Disable AMD Radeon Enhanced Sync
try {
    # Remove AMD graphics enhanced sync settings
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "EnhancedSync" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "SyncMode" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-80fb852081e9}\0000" -Name "EnhancedSyncLevel" -ErrorAction SilentlyContinue
    
    # Remove AMD driver enhanced sync settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "EnhancedSyncEnabled" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "EnhancedSyncMode" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Next Generation" -Name "EnhancedSyncLevel" -ErrorAction SilentlyContinue
    
    # Remove AMD Radeon Software enhanced sync settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Radeon Software" -Name "EnhancedSync" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\AMD\Radeon Software" -Name "EnhancedSyncMode" -ErrorAction SilentlyContinue
    
    Write-Host "AMD Radeon Enhanced Sync disabled."
} catch {
    Write-Host "Error disabling AMD Radeon Enhanced Sync: $($_.Exception.Message)"
}
