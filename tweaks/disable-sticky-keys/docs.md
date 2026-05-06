# Disable Sticky Keys Popup

## Overview
Disables the Sticky Keys accessibility popup that appears when Shift key is pressed 5 times consecutively.

## What it does
- Prevents Sticky Keys activation dialog
- Maintains normal keyboard behavior
- Stops accidental accessibility feature activation
- Preserves other accessibility features

## Registry Changes
**Location**: `HKEY_CURRENT_USER\Control Panel\Accessibility\StickyKeys`
- **Value**: `Flags`
- **Type**: `String`
- **Apply**: Sets to `"506"` (disabled)
- **Revert**: Sets to `"510"` (enabled)

## Benefits
- ✅ Prevents accidental Sticky Keys activation
- ✅ Eliminates disruptive popup dialogs
- ✅ Better gaming experience
- ✅ Uninterrupted typing workflow
- ✅ No impact on other accessibility features

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- None significant
- Other accessibility features remain functional
- Can still enable Sticky Keys manually if needed

## Technical Details
Sticky Keys is designed to help users with motor disabilities by allowing modifier keys (Shift, Ctrl, Alt) to remain active until another key is pressed. However, the 5-press activation trigger often activates accidentally during normal typing or gaming.

## Flag Breakdown
- **506**: Sticky Keys disabled, but feature remains accessible
- **510**: Sticky Keys enabled with default behavior

## Related Tweaks
- `disable-filter-keys` - Disable Filter Keys accessibility
- `disable-toggle-keys` - Disable Toggle Keys beep

---
*Added in Pulse Tweaks v2.15.0*
