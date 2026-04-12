# Disable Defender RTP
# Reverts changes made by the apply script

Set-MpPreference -DisableRealtimeMonitoring $false
