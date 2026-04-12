# Restore DNS Defaults
# Restores DNS settings to default values

# Reset DNS cache size to default
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "MaxCacheSize" -ErrorAction SilentlyContinue

# Reset DNS cache timeout to default
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "MaxCacheTtl" -ErrorAction SilentlyContinue

# Reset DNS negative cache TTL to default
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "NegativeCacheTtl" -ErrorAction SilentlyContinue

# Remove DNS parallel query setting
Remove-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" -Name "UseParallelQueries" -ErrorAction SilentlyContinue

# Flush DNS cache
Clear-DnsClientCache

# Restart DNS client service
Restart-Service -Name "Dnscache" -Force
