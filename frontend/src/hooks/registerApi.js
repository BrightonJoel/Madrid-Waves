export const registerApi = async (path, method, body) => {
  const url = "http://localhost:1337/"
  let data = null

  try {
    const res = await fetch(`${url}${path}`, {
      method,
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(body),
    })
    data = await res.json()
  } catch (err) {
    data = err
  }

  return data
}
