# Disable Edge Experiment
# Reverts changes made by Disable Edge Experiment

try {
    S
    Write-Host "Disable Edge Experiment Restored successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to restore Disable Edge Experiment: $($_.Exception.Message)" -ForegroundColor Red
}

