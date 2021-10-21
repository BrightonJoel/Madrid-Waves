export const callApi = async (path, method, body) => {
  const url = "http://localhost:1337/"
  let data = null
  let err = null

  try {
    const res = await fetch(`${url}${path}`, {
      method,
      headers: {
        "Content-Type": "application/JSON",
      },
      credentials: "include",
      body: JSON.stringify(body),
    })
    data = await res.json()
  } catch (error) {
    err = error
  }
  return { data, err }
}
