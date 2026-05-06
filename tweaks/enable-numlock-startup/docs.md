# Enable NumLock on Startup

## Overview
Ensures that NumLock is automatically turned on when Windows starts up.

## What it does
- Sets NumLock to ON at system boot
- Applies to both user and default profiles
- Maintains numeric keypad functionality
- Works across reboots

## Registry Changes
**Location 1**: `HKEY_CURRENT_USER\Control Panel\Keyboard`
- **Value**: `InitialKeyboardIndicators`
- **Type**: `String`
- **Apply**: Sets to `"2"` (NumLock on)

**Location 2**: `HKEY_USERS\.DEFAULT\Control Panel\Keyboard`
- **Value**: `InitialKeyboardIndicators`
- **Type**: `String`
- **Apply**: Sets to `"2"` (NumLock on)

## Benefits
- ✅ Numeric keypad ready at login
- ✅ Consistent keyboard behavior
- ✅ Better productivity for number entry
- ✅ No manual NumLock activation needed
- ✅ Works for all users

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- None significant
- Can still toggle NumLock manually
- Doesn't affect other keyboard indicators

## Technical Details
The InitialKeyboardIndicators value controls the initial state of keyboard LEDs:
- **0**: All indicators off
- **2**: NumLock on, others off
- **4**: CapsLock on, others off
- **8**: ScrollLock on, others off

## Why This Matters
Many users prefer NumLock to be on by default for:
- Numeric data entry
- Financial calculations
- Gaming with numeric keypad
- Password entry with numbers

## Related Tweaks
- `disable-sticky-keys` - Disable Sticky Keys popup
- `disable-toggle-keys` - Disable Toggle Keys beep

---
*Added in Pulse Tweaks v2.15.0*
