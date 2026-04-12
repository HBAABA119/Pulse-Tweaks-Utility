# Disable NVIDIA Threaded Optimization
# Disables NVIDIA threaded optimization and restores defaults

# Check if NVIDIA GPU is present
$nvidiaGPU = Get-WmiObject Win32_VideoController | Where-Object {$_.AdapterCompatibility -like "*NVIDIA*"}
if (-not $nvidiaGPU) {
    Write-Host "No NVIDIA GPU found. This tweak is not applicable."
    exit 1
}

# Disable NVIDIA threaded optimization
try {
    # Remove NVIDIA driver threaded optimization settings
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "EnableThreadingOptimization" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "ThreadedOptimizationLevel" -ErrorAction SilentlyContinue
    
    # Remove CUDA settings modifications
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "CUDAEnabled" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "CUDALaunchMode" -ErrorAction SilentlyContinue
    
    # Remove PhysX settings modifications
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "PhysXEnabled" -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\NVIDIA Corporation\Global" -Name "PhysXLevel" -ErrorAction SilentlyContinue
    
    Write-Host "NVIDIA threaded optimization disabled."
} catch {
    Write-Host "Error disabling NVIDIA threaded optimization: $($_.Exception.Message)"
}
