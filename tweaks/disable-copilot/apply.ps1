# Disable Copilot
# Removes Microsoft's Copilot feature. (will fail if copilot is not installed)

Get-AppxPackage -AllUsers | Where-Object {$_.Name -Like '*Microsoft.Copilot*'} | Remove-AppxPackage -ErrorAction Continue
