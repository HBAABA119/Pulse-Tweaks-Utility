# Enable Verbose Startup/Shutdown

## Overview
Shows detailed information during Windows startup and shutdown processes for troubleshooting.

## What it does
- Displays detailed startup messages
- Shows shutdown process information
- Provides diagnostic information
- Helps identify startup/shutdown issues

## Registry Changes
**Location**: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System`
- **Value**: `VerboseStatus`
- **Type**: `DWORD`
- **Apply**: Sets to `1` (enabled)
- **Revert**: Sets to `0` (disabled)

## Benefits
- ✅ Better troubleshooting capability
- ✅ Identifies problematic services
- ✅ Shows driver loading status
- ✅ Displays shutdown process details
- ✅ Helps with system diagnostics

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- Slower startup/shutdown (text display)
- More verbose boot process
- May show technical messages to users
- Slightly longer boot time

## Information Displayed
- **Startup**: Driver loading, service initialization
- **Shutdown**: Service termination, process cleanup
- **Errors**: Detailed error messages
- **Warnings**: System warnings and issues

## Use Cases
- **Troubleshooting**: Identify startup problems
- **System Diagnostics**: Monitor boot process
- **IT Administration**: Professional system analysis
- **Development**: Driver and service debugging

## Technical Details
Verbose status is primarily intended for developers and IT professionals. The detailed messages help identify exactly where startup or shutdown processes may be failing.

## Related Tweaks
- `disable-logon-background` - Faster login without background image
- `disable-shutdown-tracker` - Remove shutdown tracking dialog

---
*Added in Pulse Tweaks v2.15.0*
