# Disable Mouse Pointer Shadow

## Overview
Removes the shadow effect that appears under the mouse cursor for better performance.

## What it does
- Eliminates cursor shadow effect
- Improves mouse rendering performance
- Provides cleaner cursor appearance
- Reduces GPU resource usage

## Registry Changes
**Location**: `HKEY_CURRENT_USER\Control Panel\Cursors`
- **Value**: `CursorShadow`
- **Type**: `DWORD`
- **Apply**: Sets to `0` (disabled)
- **Revert**: Sets to `1` (enabled)

## Benefits
- ✅ Better cursor performance
- ✅ Reduced GPU usage
- ✅ Cleaner cursor appearance
- ✅ Improved gaming performance
- ✅ Better for low-end systems

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- None significant
- Cursor still fully functional
- No impact on cursor visibility
- Can still use custom cursors

## Performance Impact
- **GPU Usage**: Reduced rendering overhead
- **Frame Rate**: Better performance in games
- **System Resources**: Lower memory usage
- **Battery Life**: Improved on laptops

## Technical Details
The mouse shadow is rendered by the graphics subsystem and can impact performance, especially in games or applications with high cursor movement. Disabling it reduces GPU load.

## Visual Changes
- **No Shadow**: Clean cursor without shadow
- **Better Visibility**: Easier to see on all backgrounds
- **Consistent Appearance**: Uniform cursor look
- **Professional Look**: Cleaner interface

## Related Tweaks
- `disable-aero-shake` - Prevent window minimization
- `disable-animations` - Improve overall performance

---
*Added in Pulse Tweaks v2.15.0*
