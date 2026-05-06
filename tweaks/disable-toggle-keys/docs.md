# Disable Toggle Keys

## Overview
Disables the Toggle Keys accessibility feature that plays a beep sound when Caps Lock, Num Lock, or Scroll Lock are pressed.

## What it does
- Prevents beep sounds on modifier key presses
- Maintains silent keyboard operation
- Stops annoying audio feedback
- Preserves key functionality

## Registry Changes
**Location**: `HKEY_CURRENT_USER\Control Panel\Accessibility\ToggleKeys`
- **Value**: `Flags`
- **Type**: `String`
- **Apply**: Sets to `"58"` (disabled)
- **Revert**: Sets to `"62"` (enabled)

## Benefits
- ✅ Eliminates annoying beep sounds
- ✅ Silent keyboard operation
- ✅ Better gaming experience
- ✅ No distraction during typing
- ✅ Professional work environment

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- None significant
- Keys still function normally
- Visual indicators (LED lights) still work
- Can still enable Toggle Keys manually if needed

## Technical Details
Toggle Keys is designed to help users with visual impairments by providing audio feedback when modifier keys are pressed. However, the beep sounds are often considered annoying and disruptive in quiet environments.

## Flag Breakdown
- **58**: Toggle Keys disabled, no audio feedback
- **62**: Toggle Keys enabled with beep sounds

## Affected Keys
- **Caps Lock**: No beep on toggle
- **Num Lock**: No beep on toggle
- **Scroll Lock**: No beep on toggle

## Related Tweaks
- `disable-sticky-keys` - Disable Sticky Keys popup
- `disable-filter-keys` - Disable Filter Keys accessibility

---
*Added in Pulse Tweaks v2.15.0*
