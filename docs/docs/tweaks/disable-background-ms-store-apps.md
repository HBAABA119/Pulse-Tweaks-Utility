# Disable Background MS Store apps

## Overview
- **ID/URL**: `disable-background-ms-store-apps`
- **Description**: Disables Microsoft Store apps from running in the background

## Details

- Disables all background activity for modern UWP apps by setting 'GlobalUserDisabled' to 1 under the current user's BackgroundAccessApplications registry key, creating the key if it doesn't exist.

