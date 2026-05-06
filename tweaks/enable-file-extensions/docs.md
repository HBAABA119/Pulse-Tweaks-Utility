# Show File Extensions

## Overview
Always shows file extensions in File Explorer instead of hiding them by default.

## What it does
- Displays file extensions for all file types
- Makes file identification easier
- Prevents confusion between similar files
- Improves security awareness

## Registry Changes
**Location**: `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`
- **Value**: `HideFileExt`
- **Type**: `DWORD`
- **Apply**: Sets to `0` (show extensions)
- **Revert**: Sets to `1` (hide extensions)

## Benefits
- ✅ Better file identification
- ✅ Enhanced security awareness
- ✅ Prevents malicious file hiding
- ✅ Easier file management
- ✅ Professional file handling

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- None negative
- Standard Windows behavior for power users
- Can still hide extensions manually if needed

## Security Benefits
- **Malware Detection**: Easier to spot executable files disguised as documents
- **File Type Awareness**: Clear understanding of file types before opening
- **Accidental Prevention**: Reduced risk of opening wrong file type

## Examples
Before hiding:
- `document.pdf.exe` appears as `document`
- `photo.jpg.scr` appears as `photo.jpg`

After showing:
- `document.pdf.exe` appears as `document.pdf.exe`
- `photo.jpg.scr` appears as `photo.jpg.scr`

## Common File Extensions
- `.exe` - Executable files
- `.bat` - Batch files
- `.cmd` - Command files
- `.scr` - Screen savers
- `.vbs` - Visual Basic scripts
- `.js` - JavaScript files
- `.ps1` - PowerShell scripts

## Related Tweaks
- `disable-recent-files` - Hide recent files from File Explorer
- `disable-quick-access` - Use This PC instead of Quick Access

---
*Added in Pulse Tweaks v2.15.0*
