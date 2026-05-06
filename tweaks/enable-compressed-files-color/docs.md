# Colorize Compressed Files

## Overview
Makes compressed files and folders display in blue color in File Explorer for easy identification.

## What it does
- Colors compressed files blue
- Colors compressed folders blue
- Provides visual compression indicator
- Makes compressed items easily identifiable

## Registry Changes
**Location**: `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`
- **Value**: `ShowCompColor`
- **Type**: `DWORD`
- **Apply**: Sets to `1` (show color)
- **Revert**: Sets to `0` (hide color)

## Benefits
- ✅ Easy identification of compressed files
- ✅ Visual compression status indicator
- ✅ Better file management
- ✅ Quick recognition of compressed content
- ✅ Professional file organization

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- None negative
- Files remain fully functional
- No impact on compression performance
- Can still compress/uncompress normally

## Visual Changes
- **Compressed Files**: Displayed in blue text
- **Compressed Folders**: Blue folder names
- **Uncompressed Items**: Normal black text
- **Clear Distinction**: Easy to tell difference

## Compression Formats Affected
- **NTFS Compression**: Built-in Windows compression
- **ZIP Files**: Archive format
- **RAR Files**: Archive format
- **7Z Files**: Archive format
- **CAB Files**: Cabinet files

## Use Cases
- **Storage Management**: Identify compressed vs uncompressed
- **File Organization**: Visual compression status
- **System Administration**: Quick compression overview
- **Backup Management**: Identify compressed backups

## Related Tweaks
- `enable-file-extensions` - Always show file extensions
- `disable-recent-files` - Hide recent files from File Explorer

---
*Added in Pulse Tweaks v2.15.0*
