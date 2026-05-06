# Disable Remote Assistance

## Overview
Disables Windows Remote Assistance feature to enhance security and prevent unauthorized remote access.

## What it does
- Blocks Remote Assistance requests
- Disables remote help invitations
- Prevents unsolicited remote connections
- Enhances system security

## Registry Changes
**Location**: `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Remote Assistance`
- **Value 1**: `fAllowToGetHelp`
- **Type**: `DWORD`
- **Apply**: Sets to `0` (disabled)
- **Revert**: Sets to `1` (enabled)

**Value 2**: `fAllowFullControl`
- **Type**: `DWORD`
- **Apply**: Sets to `0` (disabled)
- **Revert**: Sets to `1` (enabled)

## Benefits
- ✅ Enhanced security posture
- ✅ Prevents unauthorized remote access
- ✅ Reduces attack surface
- ✅ No remote assistance prompts
- ✅ Better for enterprise environments

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- Remote Assistance completely disabled
- Can't receive remote help through Windows
- No impact on other remote features (RDP still works)
- Can still use third-party remote tools

## Security Benefits
- **Attack Surface Reduction**: Fewer enabled services
- **Social Engineering Protection**: Prevents remote assistance scams
- **Unauthorized Access Prevention**: Blocks unwanted remote connections
- **Compliance**: Better for security policies

## What Gets Disabled
- **Remote Assistance Invitations**: Can't send or receive
- **Easy Connect**: Remote assistance wizard disabled
- **Windows Remote Assistance**: Service completely disabled
- **Help Requests**: No system-generated help requests

## Related Tweaks
- `disable-network-discovery` - Hide PC on network
- `enable-admin-approval` - Enforce UAC prompts

---
*Added in Pulse Tweaks v2.15.0*
