# Disable Network Discovery

## Overview
Disables network discovery services to prevent your computer from being visible on local networks.

## What it does
- Stops network discovery broadcasts
- Hides PC from network browsers
- Disables UPnP and SSDP services
- Enhances network privacy

## Service Changes
**Services Disabled**:
- `fdrespub` - Function Discovery Resource Publication
- `ssdpdisc` - SSDP Discovery
- `upnphost` - UPnP Device Host
- `dnscache` - DNS Client (set to Manual)

**Startup Type**: Set to `Disabled`
**Service State**: Stopped immediately

## Benefits
- ✅ Enhanced network privacy
- ✅ Reduced network attack surface
- ✅ Better security posture
- ✅ No unwanted network visibility
- ✅ Control over network presence

## Compatibility
- **Windows 7**: ✅ Supported
- **Windows 8/8.1**: ✅ Supported
- **Windows 10**: ✅ Supported
- **Windows 11**: ✅ Supported
- **Server editions**: ✅ Supported

## Side Effects
- Computer won't appear in Network list
- Network printers may not auto-discover
- Media devices won't auto-detect PC
- Network shares still accessible via direct connection

## Technical Details
Network Discovery uses several protocols to announce computer presence on local networks:
- **UPnP**: Universal Plug and Play
- **SSDP**: Simple Service Discovery Protocol
- **WS-Discovery**: Web Services Discovery
- **LLMNR**: Link-Local Multicast Name Resolution

## What Still Works
- **Network Access**: Can still connect to networks
- **File Sharing**: Network shares still accessible
- **Direct Connections**: Manual connections work
- **Internet Access**: Completely unaffected

## Related Tweaks
- `disable-remote-assistance` - Block remote assistance features
- `enable-admin-approval` - Enforce UAC prompts

---
*Added in Pulse Tweaks v2.15.0*
