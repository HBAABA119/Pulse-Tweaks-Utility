# New Tweaks - Version 2.15.0

## Overview
This release adds 21 new unique tweaks to Pulse Tweaks, bringing the total from 179 to **200 tweaks**.

## New Tweaks Added

### General & Accessibility

| ID | Title | Description | Category | Recommended |
|----|-------|-------------|----------|-------------|
| `disable-aero-shake` | Disable Aero Shake | Prevents windows from minimizing when you shake them | General, Performance | ✅ |
| `disable-sticky-keys` | Disable Sticky Keys Popup | Disables the Sticky Keys popup when pressing Shift 5 times | General, Accessibility | ✅ |
| `disable-filter-keys` | Disable Filter Keys | Disables Filter Keys accessibility feature | General, Accessibility | ✅ |
| `disable-toggle-keys` | Disable Toggle Keys | Disables Toggle Keys beep when pressing Caps Lock | General, Accessibility | ✅ |
| `enable-numlock-startup` | Enable NumLock on Startup | Ensures NumLock is turned on when Windows starts | General, Utility | ❌ |
| `enable-verbose-status` | Enable Verbose Startup/Shutdown | Shows detailed information during Windows startup and shutdown | General, Utility | ❌ |
| `disable-shutdown-tracker` | Disable Shutdown Event Tracker | Disables the shutdown event tracker dialog on Windows shutdown | General, Utility | ✅ |
| `enable-file-extensions` | Show File Extensions | Always show file extensions in File Explorer | General, Utility | ✅ |
| `enable-compressed-files-color` | Colorize Compressed Files | Shows compressed files and folders in blue color in File Explorer | General, Utility | ❌ |

### File Explorer & Appearance

| ID | Title | Description | Category | Recommended |
|----|-------|-------------|----------|-------------|
| `disable-recent-files` | Disable Recent Files | Disables recent files and folders in File Explorer | Privacy, General | ✅ |
| `disable-quick-access` | Disable Quick Access | Disables Quick Access in File Explorer, opens to This PC instead | General, Privacy | ✅ |
| `disable-shortcut-arrow` | Remove Shortcut Arrows | Removes the arrow overlay from shortcut icons on the desktop | General, Appearance | ❌ |

### Performance

| ID | Title | Description | Category | Recommended |
|----|-------|-------------|----------|-------------|
| `disable-snap-assist` | Disable Snap Assist | Disables the Snap Assist feature when snapping windows | General, Performance | ❌ |
| `disable-snap-fill` | Disable Snap Fill | Disables automatic window resizing when dragging to screen edges | General, Performance | ❌ |
| `disable-logon-background` | Disable Logon Background Image | Disables the background image on the Windows logon screen for faster login | General, Performance | ❌ |
| `disable-mouse-shadow` | Disable Mouse Pointer Shadow | Disables the shadow effect under the mouse cursor for better performance | General, Performance | ✅ |

### Security & Privacy

| ID | Title | Description | Category | Recommended |
|----|-------|-------------|----------|-------------|
| `enable-clear-clipboard` | Clear Clipboard on Exit | Automatically clears clipboard when exiting Windows | Privacy, Security | ❌ |
| `disable-remote-assistance` | Disable Remote Assistance | Disables Windows Remote Assistance feature for security | Privacy, Security | ✅ |
| `disable-network-discovery` | Disable Network Discovery | Disables network discovery to hide your PC on the network | Privacy, Security | ❌ |
| `enable-admin-approval` | Enable Admin Approval Mode | Ensures Admin Approval Mode is enabled for UAC prompts | Security | ✅ |

### Utility

| ID | Title | Description | Category | Recommended |
|----|-------|-------------|----------|-------------|
| `enable-god-mode` | Enable God Mode | Creates a God Mode folder with all Windows settings | General, Utility | ❌ |

## File Structure

Each tweak follows the standard Pulse Tweaks structure:
```
tweaks/[tweak-id]/
├── meta.json       # Metadata and description
├── apply.ps1       # PowerShell script to apply the tweak
└── unapply.ps1     # PowerShell script to revert the tweak
```

## Registry Updates

All 21 new tweaks have been added to `tweaks/registry.json` with:
- Unique IDs
- Proper categorization
- Documentation URLs
- Source references
- `addedversion`: "2.15.0"

## Testing

All tweaks have been tested to ensure:
- ✅ Apply scripts work correctly
- ✅ Unapply scripts revert changes properly
- ✅ No conflicts with existing tweaks
- ✅ Proper error handling

## Stats

- **Previous total**: 179 tweaks
- **New tweaks added**: 21 tweaks
- **New total**: **200 tweaks** 🎉

---
*Released: May 3, 2026*
