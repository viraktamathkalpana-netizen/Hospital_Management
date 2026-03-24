$headers = @{
    "Accept" = "application/json"
    "Authorization" = "Bearer napi_6p924grq9xekru4qodvpn4lvdiqhiz4voxb23o6w2aq7d22uny5omnq57n2go7po"
}

try {
    # Try to get connection string directly
    $response = Invoke-RestMethod -Uri "https://console.neon.tech/api/v2/projects/autumn-river-19320019/connection_string" -Method Get -Headers $headers -ErrorAction Stop
    $response | ConvertTo-Json | Out-File -FilePath "neon_connection_string.json"
    Write-Output "Connection string retrieved successfully."
} catch {
    Write-Output "Failed to get connection string directly."
    $_.Exception.Message | Out-File -FilePath "neon_connection_error.json"
}
