# Disable Gamebar

## Overview
- **ID/URL**: `disable-gamebar`
- **Description**: Disables The Xbox gamebar 

## Details

- Attempts to remove Xbox Gaming Overlay using Remove-AppxPackage, with a fallback to winget, to eliminate background Xbox services and overlays that can consume CPU, RAM, and GPU resources, improving system performance and reducing in-game interruptions.

!!! warning "Documentation Warning"
    Do not enable this if you have a X3D cpu Example: AMD Ryzen 7 9800X3D as it allocates the 3d vcache cores to the game running. Disabling game bar stops this
!!! warning "Tweak Warning"
    Do not enable this if you have a X3D cpu. read docs for more info

!!! warning "Documentation Warning"
    Do not enable this if you have a X3D cpu Example: AMD Ryzen 7 9800X3D as it allocates the 3d vcache cores to the game running. Disabling game bar stops this
!!! warning "Tweak Warning"
    Do not enable this if you have a X3D cpu. read docs for more info

