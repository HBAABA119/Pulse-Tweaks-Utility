# Enable Admin Approval Mode

## Overview
Ensures Admin Approval Mode is properly enabled for UAC prompts to maintain security.

## What it does
- Enforces UAC prompt behavior
- Requires admin approval for elevated actions
- Maintains secure elevation process
- Prevents silent privilege escalation

## Registry Changes
**Location**: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System`
- **Value 1**: `EnableLUA`
- **Type**: `DWORD`
- **Apply**: Sets to `1` (enabled)
- **Revert**: Sets to `0` (disabled)

**Value 2**: `ConsentPromptBehaviorAdmin`
- **Type**: `DWORD`
- **Apply**: Sets to `2` (prompt for credentials)
- **Revert**: Sets to `5` (default behavior)

## Benefits
- ✅ Enhanced security posture
- ✅ Prevents silent privilege escalation
- ✅ Requires explicit admin approval
- ✅ Better malware protection
- ✅ Secure UAC behavior

## Compatibility
- **Windows Vista**: ✅ Supported
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- More UAC prompts for admin actions
- Need to enter credentials for elevation
- No silent admin operations
- May require more user interaction

## Technical Details
Admin Approval Mode ensures that User Account Control (UAC) properly prompts for administrator credentials when elevated privileges are required, preventing unauthorized privilege escalation.

## Consent Prompt Behaviors
- **0**: No prompt (elevate silently)
- **1**: Prompt for credentials on secure desktop
- **2**: Prompt for credentials on interactive desktop
- **3**: Prompt for consent (non-admin users)
- **5**: Default Windows behavior

## Security Benefits
- **Malware Protection**: Prevents silent elevation
- **Unauthorized Access**: Blocks privilege escalation
- **System Integrity**: Maintains security boundaries
- **Audit Trail**: Creates elevation events

## Related Tweaks
- `disable-remote-assistance` - Block remote assistance features
- `disable-network-discovery` - Hide PC on network

---
*Added in Pulse Tweaks v2.15.0*
