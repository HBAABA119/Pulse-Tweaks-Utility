# Disable Filter Keys

## Overview
Disables the Filter Keys accessibility feature that ignores brief or repeated keystrokes.

## What it does
- Prevents Filter Keys activation
- Maintains normal keyboard response
- Stops delayed key registration
- Preserves typing speed and accuracy

## Registry Changes
**Location**: `HKEY_CURRENT_USER\Control Panel\Accessibility\Keyboard Response`
- **Value**: `Flags`
- **Type**: `String`
- **Apply**: Sets to `"122"` (disabled)
- **Revert**: Sets to `"126"` (enabled)

## Benefits
- ✅ Eliminates typing delays
- ✅ Prevents missed keystrokes
- ✅ Better gaming performance
- ✅ Normal keyboard responsiveness
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
- Can still enable Filter Keys manually if needed

## Technical Details
Filter Keys is designed to help users with motor disabilities by ignoring brief or repeated keystrokes. However, it can cause typing delays and missed keystrokes for normal users, especially during fast typing or gaming.

## Flag Breakdown
- **122**: Filter Keys disabled, normal keyboard behavior
- **126**: Filter Keys enabled with default filtering

## Symptoms When Enabled
- Delayed key registration
- Missed rapid keystrokes
- Poor gaming performance
- Frustrating typing experience

## Related Tweaks
- `disable-sticky-keys` - Disable Sticky Keys popup
- `disable-toggle-keys` - Disable Toggle Keys beep

---
*Added in Pulse Tweaks v2.15.0*
