# Disable Shutdown Event Tracker

## Overview
Disables the shutdown event tracker dialog that appears on Windows shutdown in some configurations.

## What it does
- Removes shutdown event tracking dialog
- Eliminates shutdown reason prompts
- Provides faster shutdown process
- Maintains normal shutdown behavior

## Registry Changes
**Location**: `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows NT\Reliability`
- **Value 1**: `ShutdownReasonOn`
- **Type**: `DWORD`
- **Apply**: Sets to `0` (disabled)
- **Revert**: Removes value (enabled)

**Value 2**: `ShutdownReasonUI`
- **Type**: `DWORD`
- **Apply**: Sets to `0` (disabled)
- **Revert**: Removes value (enabled)

## Benefits
- ✅ Faster shutdown process
- ✅ No shutdown reason prompts
- ✅ Cleaner shutdown experience
- ✅ No interruption to workflow
- ✅ Better for automated systems

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- None significant
- Shutdown tracking data not collected
- No impact on system stability
- Normal shutdown functionality preserved

## Technical Details
The Shutdown Event Tracker is primarily used in enterprise environments to track system shutdown reasons. For most users, it adds unnecessary steps to the shutdown process.

## What Gets Disabled
- **Shutdown Reason Dialog**: No prompt for shutdown cause
- **Event Tracking**: No shutdown reason logging
- **UI Interruption**: Direct shutdown without prompts

## Related Tweaks
- `enable-verbose-status` - Show startup/shutdown details
- `disable-logon-background` - Faster login without background

---
*Added in Pulse Tweaks v2.15.0*
