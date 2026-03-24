$headers = @{
    "Accept" = "application/json"
    "Authorization" = "Bearer napi_6p924grq9xekru4qodvpn4lvdiqhiz4voxb23o6w2aq7d22uny5omnq57n2go7po"
}

$projectId = "autumn-river-19320019"
$branchId = "br-morning-waterfall-a5v4q9m2"

try {
    # List roles for the branch
    $rolesResponse = Invoke-RestMethod -Uri "https://console.neon.tech/api/v2/projects/$projectId/branches/$branchId/roles" -Method Get -Headers $headers -ErrorAction Stop
    $rolesResponse | ConvertTo-Json | Out-File -FilePath "neon_roles_list_final.json"
    
    foreach ($role in $rolesResponse.roles) {
        $roleName = $role.name
        try {
            $passwordResponse = Invoke-RestMethod -Uri "https://console.neon.tech/api/v2/projects/$projectId/branches/$branchId/roles/$roleName/password" -Method Get -Headers $headers -ErrorAction Stop
            $passwordResponse | ConvertTo-Json | Out-File -FilePath "neon_password_$roleName.json"
        } catch {
            Write-Output "Failed to get password for role $roleName"
        }
    }
    Write-Output "Roles and passwords processing complete."
} catch {
    Write-Output "Failed to list roles for branch."
    $_.Exception.Message | Out-File -FilePath "neon_roles_error.json"
}
