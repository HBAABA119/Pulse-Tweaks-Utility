# Optimize DNS
# Optimizes DNS settings for faster resolution

# Set DNS cache size for better performance
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "MaxCacheSize" -Value 1024 -Type DWORD -Force

# Set DNS cache timeout for better responsiveness
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "MaxCacheTtl" -Value 86400 -Type DWORD -Force

# Set DNS negative cache TTL
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "NegativeCacheTtl" -Value 900 -Type DWORD -Force

# Configure DNS client to use parallel queries
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "UseParallelQueries" -Value 1 -Type DWORD -Force

# Flush DNS cache to apply changes
Clear-DnsClientCache

# Restart DNS client service
Restart-Service -Name "Dnscache" -Force
