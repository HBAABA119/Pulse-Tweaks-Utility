# Enable End Task With Right Click
# Enables the "End Task" option in the taskbar context menu

$regPath = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced\TaskbarDeveloperSettings"
$valueName = "TaskbarEndTask"

if (-not (Test-Path $regPath)) {
    New-Item -Path $regPath -Force | Out-Null
}

Set-ItemProperty -Path $regPath -Name $valueName -Type DWord -Value 1
