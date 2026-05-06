# Disable Aero Shake

## Overview
Prevents windows from minimizing when you shake them by dragging the title bar back and forth rapidly.

## What it does
- Disables the Aero Shake feature in Windows
- Prevents accidental window minimization
- Improves workflow stability

## Registry Changes
**Location**: `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`
- **Value**: `DisallowShaking`
- **Type**: `DWORD`
- **Apply**: Sets to `1` (disabled)
- **Revert**: Sets to `0` (enabled)

## Benefits
- ✅ Prevents accidental window minimization
- ✅ More stable multitasking experience
- ✅ Reduces frustration during window management
- ✅ Performance improvement (fewer window state changes)

## Compatibility
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- None significant
- Windows snapping still works normally
- Other window management features unaffected

## Technical Details
The Aero Shake feature was introduced in Windows 7 as a way to quickly minimize all windows except the active one by shaking the window. While useful for some users, it often triggers accidentally, especially with trackpads or during window repositioning.

## Related Tweaks
- `disable-snap-assist` - Disable window snap suggestions
- `disable-snap-fill` - Disable automatic window resizing

---
*Added in Pulse Tweaks v2.15.0*
