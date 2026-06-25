const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2IwMWE0MjE0QHN2ZWN3LmVkdS5pbiIsImV4cCI6MTc4MjM4MzMyMywiaWF0IjoxNzgyMzgyNDIzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZWI2NjczMjMtYjdkZC00NWM1LTlhMDEtYTY0NTVhMWUwMzFjIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYmluZGh1c2hyZWUgcmFndWxhIiwic3ViIjoiMWM0ZjNlNTktY2I5Yi00Y2I2LTgyNmItNDA1MzRhYTQ2NGRmIn0sImVtYWlsIjoiMjNiMDFhNDIxNEBzdmVjdy5lZHUuaW4iLCJuYW1lIjoiYmluZGh1c2hyZWUgcmFndWxhIiwicm9sbE5vIjoiMjNiMDFhNDIxNCIsImFjY2Vzc0NvZGUiOiJhaFhqdnAiLCJjbGllbnRJRCI6IjFjNGYzZTU5LWNiOWItNGNiNi04MjZiLTQwNTM0YWE0NjRkZiIsImNsaWVudFNlY3JldCI6Im5QQ0ZVaGViZVBYa0tDUmIifQ.7UpEsknpx-mblatJzSemS3uJF5PG5XawqBiC2slhdkI"

export const createLog = async (
  stack,
  level,
  moduleName,
  message
) => {
  try {
    const result = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        body: JSON.stringify({
          stack,
          level,
          package: moduleName,
          message,
        }),
      }
    );

    return await result.json();
  } catch {
    return null;
  }
};