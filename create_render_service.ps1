$headers = @{
    "Accept" = "application/json"
    "Authorization" = "Bearer rnd_zfvbqaCa62FvQ4ILTk46zCMegBcg"
    "Content-Type" = "application/json"
}

$body = Get-Content "render_service_request.json"

try {
    $response = Invoke-RestMethod -Uri "https://api.render.com/v1/services" -Method Post -Headers $headers -Body $body -ErrorAction Stop
    $response | ConvertTo-Json | Out-File -FilePath "render_service_response.json"
    Write-Output "Render service created successfully."
} catch {
    Write-Output "Failed to create Render service."
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $errorBody = $reader.ReadToEnd()
        Write-Output $errorBody
    } else {
        Write-Output $_.Exception.Message
    }
}
