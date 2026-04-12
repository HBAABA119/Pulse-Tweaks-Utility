# NVIDIA Threaded Optimization
# Enables NVIDIA threaded optimization for better multi-core performance

# Check if NVIDIA GPU is present
$nvidiaGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*NVIDIA*"}
if (-not $nvidiaGPU) {
    Write-Host "No NVIDIA GPU found. This tweak is not applicable."
    exit 1
}

# Enable NVIDIA threaded optimization
try {
    # Configure NVIDIA driver for threaded optimization
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "EnableThreadingOptimization" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "ThreadedOptimizationLevel" -Value 2 -Type DWORD -Force
    
    # Configure CUDA settings for better performance
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "CUDAEnabled" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "CUDALaunchMode" -Value 1 -Type DWORD -Force
    
    # Configure PhysX settings
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "PhysXEnabled" -Value 1 -Type DWORD -Force
    Set-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "PhysXLevel" -Value 4 -Type DWORD -Force
    
    Write-Host "NVIDIA threaded optimization enabled."
} catch {
    Write-Host "Error enabling NVIDIA threaded optimization: $($_.Exception.Message)"
}
