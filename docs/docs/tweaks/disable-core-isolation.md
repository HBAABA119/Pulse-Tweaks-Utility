# Disable Core Isolation

## Overview
- **ID/URL**: `disable-core-isolation`
- **Description**: Disables Core Isolation Memory Integrity to improve system performance

## Details

- Creates the registry path for Hypervisor-Enforced Code Integrity under DeviceGuard if missing, and disables HVCI by setting Enabled to 0 in the system-wide registry.

