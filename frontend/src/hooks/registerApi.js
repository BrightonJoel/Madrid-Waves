export const registerApi = async (path, method, body) => {
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
      body: JSON.stringify(body),
    })
    if (res.status >= 200 && res.status <= 299) {
      data = await res.json()
    } else {
      error = "Please check your username and password"
    }
    loading = false
  } catch (err) {
    error = err
    loading = false
  }

  return { loading, error, data }
}
