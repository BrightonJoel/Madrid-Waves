import { useEffect, useState } from "react"

const useYouTube = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const url = process.env.REACT_APP_YOUTUBE_ENDPOINT
  const key = process.env.REACT_APP_YOUTUBE_API_KEY
  const playlistId = process.env.REACT_APP_YOUTUBE_PLAYLIST

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true)

      try {
        const res = await fetch(
          `${url}?part=snippet&playlistId=${playlistId}&maxResults=2&key=${key}`
        )
        const json = await res.json()
        setData(json)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchVideos()
  }, [url, key, playlistId])

  return { loading, error, data }
}

export default useYouTube
