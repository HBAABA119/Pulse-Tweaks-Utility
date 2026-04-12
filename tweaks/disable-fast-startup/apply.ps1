# Disable Fast Startup
# Disables Windows Fast Startup to improve system stability

Set-ItemProperty -Path 'HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Power' -Name HiberbootEnabled -Value 0
