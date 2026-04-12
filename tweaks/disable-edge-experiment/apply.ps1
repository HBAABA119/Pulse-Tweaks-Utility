# Disable Edge Experiment
# Disables Edge experimentation features.

try {
    S
    Write-Host "Disable Edge Experiment Applied successfully." -ForegroundColor Green
} catch {
    Write-Host "Error trying to apply Disable Edge Experiment: $($_.Exception.Message)" -ForegroundColor Red
}

