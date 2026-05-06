# Disable Recent Files

## Overview
Disables the display of recently used files and folders in File Explorer and jump lists.

## What it does
- Hides recent files from File Explorer
- Removes recent items from jump lists
- Improves privacy by not tracking file access
- Cleans up File Explorer interface

## Registry Changes
**Location**: `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer`
- **Value 1**: `ShowRecent`
- **Type**: `DWORD`
- **Apply**: Sets to `0` (hidden)
- **Revert**: Sets to `1` (visible)

**Value 2**: `ShowFrequent`
- **Type**: `DWORD`
- **Apply**: Sets to `0` (hidden)
- **Revert**: Sets to `1` (visible)

## Benefits
- ✅ Enhanced privacy
- ✅ Cleaner File Explorer interface
- ✅ No tracking of file access history
- ✅ Better performance in File Explorer
- ✅ Professional appearance

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- Recent files list will be empty
- Jump lists won't show recent items
- Need to manually navigate to frequently used files
- No impact on file functionality

## Technical Details
Windows tracks recently accessed files to provide quick access. This feature can be a privacy concern on shared computers or when working with sensitive documents.

## Affected Areas
- **File Explorer**: Recent files section
- **Jump Lists**: Recent items in taskbar
- **Start Menu**: Recent files list
- **Applications**: Recent documents in Office apps

## Related Tweaks
- `disable-quick-access` - Disable Quick Access in File Explorer
- `enable-clear-clipboard` - Clear clipboard on exit

---
*Added in Pulse Tweaks v2.15.0*
