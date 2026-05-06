# Disable Quick Access

## Overview
Changes File Explorer to open to "This PC" instead of "Quick Access" at startup.

## What it does
- Sets File Explorer default location to This PC
- Removes Quick Access from File Explorer navigation
- Provides traditional computer view
- Shows drives and system folders by default

## Registry Changes
**Location**: `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`
- **Value**: `LaunchTo`
- **Type**: `DWORD`
- **Apply**: Sets to `1` (This PC)
- **Revert**: Sets to `2` (Quick Access)

## Benefits
- ✅ Traditional File Explorer experience
- ✅ Shows drives and system folders
- ✅ No privacy concerns from recent files
- ✅ Cleaner navigation interface
- ✅ Better for power users

## Compatibility
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- Quick Access features are not available
- Recent files not prominently displayed
- Frequent folders not automatically shown
- Need manual navigation to common locations

## Value Options
- **1**: This PC (traditional view)
- **2**: Quick Access (default Windows 10/11)

## Technical Details
Quick Access was introduced in Windows 8 as a way to provide quick access to frequently used files and folders. However, it raises privacy concerns and some users prefer the traditional This PC view.

## Related Tweaks
- `disable-recent-files` - Hide recent files from File Explorer
- `enable-file-extensions` - Always show file extensions

---
*Added in Pulse Tweaks v2.15.0*
