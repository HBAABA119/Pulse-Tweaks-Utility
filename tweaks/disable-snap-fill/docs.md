# Disable Snap Fill

## Overview
Disables automatic window resizing and arrangement when dragging windows to screen edges.

## What it does
- Prevents automatic window resizing
- Disables snap-to-fill behavior
- Maintains manual window control
- Stops unwanted window maximization

## Registry Changes
**Location**: `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`
- **Value 1**: `DockMoving`
- **Type**: `DWORD`
- **Apply**: Sets to `0` (disabled)
- **Revert**: Sets to `1` (enabled)

**Value 2**: `SnapSizing`
- **Type**: `DWORD`
- **Apply**: Sets to `0` (disabled)
- **Revert**: Sets to `1` (enabled)

## Benefits
- ✅ Full manual window control
- ✅ No automatic resizing
- ✅ Better precision in window placement
- ✅ Improved workflow for specific layouts
- ✅ Prevents accidental maximization

## Compatibility
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- Need to manually resize windows
- No automatic snapping to screen halves
- Manual window arrangement required
- Basic drag-to-edge still works

## Technical Details
Snap Fill automatically resizes windows to fill available screen space when dragged to edges. While useful for some users, it can interfere with precise window placement and custom layouts.

## What Still Works
- **Basic Snapping**: Windows still snap to screen edges
- **Manual Resizing**: Mouse drag resizing still works
- **Keyboard Shortcuts**: Win+Arrow keys still work
- **Multi-monitor**: Unaffected

## Related Tweaks
- `disable-snap-assist` - Disable snap layout suggestions
- `disable-aero-shake` - Prevent window minimization

---
*Added in Pulse Tweaks v2.15.0*
