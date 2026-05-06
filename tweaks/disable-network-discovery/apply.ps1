# Disable Network Discovery
# Disables network discovery to hide your PC on the network.

try {
    $services = @("fdrespub", "ssdpdisc", "upnphost", "dnscache")
    foreach ($service in $services) {
        Set-Service -Name $service -StartupType Disabled -ErrorAction SilentlyContinue
        Stop-Service -Name $service -Force -ErrorAction SilentlyContinue
    }
    Write-Host "Network Discovery disabled successfully." -ForegroundColor Green
} catch {
    Write-Host "Error disabling Network Discovery: $($_.Exception.Message)" -ForegroundColor Red
}
