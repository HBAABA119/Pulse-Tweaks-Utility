# Disable Snap Assist

## Overview
Disables the Snap Assist feature that shows layout suggestions when snapping windows.

## What it does
- Removes snap layout suggestions
- Disables window arrangement suggestions
- Maintains window snapping functionality
- Provides cleaner snap experience

## Registry Changes
**Location**: `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`
- **Value**: `SnapAssist`
- **Type**: `DWORD`
- **Apply**: Sets to `0` (disabled)
- **Revert**: Sets to `1` (enabled)

## Benefits
- ✅ Cleaner window snapping experience
- ✅ No distracting layout suggestions
- ✅ Faster window management
- ✅ Better for power users
- ✅ Reduced screen clutter

## Compatibility
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- Snap Assist suggestions won't appear
- Need to manually arrange windows
- Basic snapping still works perfectly

## Technical Details
Snap Assist was introduced in Windows 10 Anniversary Update to help users organize snapped windows. While helpful for beginners, experienced users often find it distracting.

## What Still Works
- **Window Snapping**: Drag to edges still works
- **Snap Layouts**: Manual snapping still available
- **Multi-monitor Support**: Unaffected
- **Keyboard Shortcuts**: Win+Arrow keys still work

## Related Tweaks
- `disable-snap-fill` - Disable automatic window resizing
- `disable-aero-shake` - Prevent window minimization

---
*Added in Pulse Tweaks v2.15.0*
