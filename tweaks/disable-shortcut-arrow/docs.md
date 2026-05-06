# Remove Shortcut Arrows

## Overview
Removes the small arrow overlay that appears on shortcut icons on the desktop and in File Explorer.

## What it does
- Eliminates shortcut arrow overlay
- Provides clean shortcut appearance
- Maintains shortcut functionality
- Improves desktop aesthetics

## Registry Changes
**Location**: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons`
- **Value**: `29`
- **Type**: `String`
- **Apply**: Sets to `"%SystemRoot%\System32\shell32.dll,-50"` (transparent icon)
- **Revert**: Removes value (default arrow)

## Benefits
- ✅ Cleaner desktop appearance
- ✅ Professional look for shortcuts
- ✅ No visual clutter
- ✅ Better icon visibility
- ✅ Improved aesthetics

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- None significant
- Shortcuts still function normally
- Can still identify shortcuts by right-click properties
- No impact on shortcut behavior

## Technical Details
Windows adds overlay icons to shortcuts to distinguish them from regular files. The arrow overlay (icon index 29) can be replaced with a transparent icon to remove the visual indicator.

## Icon Reference
- **Default Arrow**: Shell32.dll icon index 29
- **Transparent**: Shell32.dll icon index -50
- **Custom Icons**: Can use other shell32.dll icons

## What Still Works
- **Shortcut Functionality**: Double-click still works
- **Properties**: Right-click properties still accessible
- **Context Menu**: All shortcut options available
- **File Type Recognition**: System still identifies as shortcuts

## Related Tweaks
- `enable-file-extensions` - Always show file extensions
- `disable-quick-access` - Use This PC instead of Quick Access

---
*Added in Pulse Tweaks v2.15.0*
