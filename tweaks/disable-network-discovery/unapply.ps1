# Disable Network Discovery
# Reverts changes made by the apply script

try {
    $services = @("fdrespub", "ssdpdisc", "upnphost", "dnscache")
    foreach ($service in $services) {
        Set-Service -Name $service -StartupType Automatic -ErrorAction SilentlyContinue
        Start-Service -Name $service -ErrorAction SilentlyContinue
    }
    Write-Host "Network Discovery reverted successfully." -ForegroundColor Green
} catch {
    Write-Host "Error reverting Network Discovery: $($_.Exception.Message)" -ForegroundColor Red
}
