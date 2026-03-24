$headers = @{
    "Accept" = "application/json"
    "Authorization" = "Bearer napi_6p924grq9xekru4qodvpn4lvdiqhiz4voxb23o6w2aq7d22uny5omnq57n2go7po"
    "Content-Type" = "application/json"
}

$body = @{
    project = @{
        name = "Hospital_Management"
        region_id = "aws-us-east-1"
        org_id = "org-odd-field-05705528"
    }
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://console.neon.tech/api/v2/projects" -Method Post -Headers $headers -Body $body -ErrorAction Stop
    $response | ConvertTo-Json
} catch {
    Write-Output "--- ERROR ---"
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $errorBody = $reader.ReadToEnd()
        Write-Output $errorBody
    } else {
        Write-Output $_.Exception.Message
    }
}
