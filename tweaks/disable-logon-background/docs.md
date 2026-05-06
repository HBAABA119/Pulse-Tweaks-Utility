# Disable Logon Background Image

## Overview
Removes the background image from the Windows logon screen for faster login and cleaner appearance.

## What it does
- Removes logon screen background image
- Uses solid color background instead
- Improves login performance
- Provides clean logon interface

## Registry Changes
**Location**: `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\System`
- **Value**: `DisableLogonBackgroundImage`
- **Type**: `DWORD`
- **Apply**: Sets to `1` (disabled)
- **Revert**: Removes value (enabled)

## Benefits
- ✅ Faster login screen loading
- ✅ Reduced resource usage
- ✅ Cleaner appearance
- ✅ Better performance on older hardware
- ✅ Consistent logon experience

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- No custom background image
- Uses default Windows color scheme
- May appear less personalized
- No impact on desktop background

## Performance Impact
- **Faster Loading**: Reduced image processing
- **Lower Memory**: Less VRAM usage
- **Quick Login**: Immediate access to credentials screen
- **Better on Low-End**: Improved performance on older systems

## Technical Details
The logon background image is loaded during the Windows boot process. Disabling it can improve login speed, especially on systems with limited graphics resources or slow storage.

## Visual Changes
- **Solid Color**: Uses Windows accent color
- **No Image**: No background wallpaper
- **Clean Interface**: Minimal distraction
- **Professional Look**: Business-appropriate appearance

## Related Tweaks
- `enable-verbose-status` - Show startup/shutdown details
- `disable-shutdown-tracker` - Remove shutdown tracking dialog

---
*Added in Pulse Tweaks v2.15.0*
