export const updateApi = async (path, method, body) => {
  const url = process.env.REACT_APP_BACKEND_URL
  let data = null
  let error = null
  let loading = false

  try {
    loading = true
    const res = await fetch(`${url}${path}`, {
      method,
      headers: {
        "Content-Type": "application/JSON",
      },
      credentials: "include",
      body: JSON.stringify(body),
    })
    if (res.status >= 200 && res.status <= 299) {
      data = await res.json()
    } else if (res.status === 403) {
      error = "Unauthorized request"
    } else {
      error = "Please try again"
    }
    loading = false
  } catch (err) {
    error = err
    loading = false
  }

  return { loading, error, data }
}
