# Clear Clipboard on Exit

## Overview
Automatically clears the clipboard contents when Windows shuts down or user logs off.

## What it does
- Clears clipboard data on system exit
- Removes sensitive copied information
- Enhances privacy and security
- Works on shutdown and logoff

## Registry Changes
**Location**: `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`
- **Value**: `ClearClipboardOnExit`
- **Type**: `DWORD`
- **Apply**: Sets to `1` (enabled)
- **Revert**: Sets to `0` (disabled)

## Benefits
- ✅ Enhanced privacy protection
- ✅ Prevents data leakage
- ✅ Automatic security measure
- ✅ No manual intervention needed
- ✅ Protects sensitive information

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- Clipboard cleared on every shutdown/logoff
- Can't paste items from previous session
- Need to copy important data before shutdown
- No impact during active session

## Security Benefits
- **Password Protection**: Prevents password remnants
- **Sensitive Data**: Clears confidential information
- **Shared Computers**: Protects data on logout
- **Multi-user Systems**: Prevents cross-user data exposure

## What Gets Cleared
- **Text**: All copied text content
- **Images**: Copied images and screenshots
- **Files**: Copied file paths
- **Formatted Content**: Rich text and formatting

## Use Cases
- **Public Computers**: Essential for shared systems
- **Business Environments**: Protects corporate data
- **Privacy-Conscious Users**: Automatic data cleanup
- **Multi-user Systems**: Prevents data sharing between users

## Related Tweaks
- `disable-recent-files` - Hide recent files from File Explorer
- `disable-remote-assistance` - Block remote assistance features

---
*Added in Pulse Tweaks v2.15.0*
