import React from "react"
import useYouTube from "../../hooks/useYouTubeApi"

// Styles
import { YouTubeContainer, VideoContainer } from "./Home/SingleBlogStyles"
import { Center } from "../Header/SearchResultsStyles"

export default function YouTube() {
  const { data, loading, error } = useYouTube()

  if (loading)
    return (
      <YouTubeContainer>
        <Center>
          <img src='/img/Logo-Spinner.svg' alt='loader' />
        </Center>
      </YouTubeContainer>
    )
  if (error)
    return (
      <YouTubeContainer>
        <p>{error.message}</p>
      </YouTubeContainer>
    )

  return (
    <YouTubeContainer>
      <h2>Highlights</h2>

      {data.items.map((item) => {
        const { id, snippet = {} } = item
        const { thumbnails = {}, resourceId } = snippet
        const { medium = {} } = thumbnails
        return (
          <VideoContainer key={id}>
            <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
              <img src={medium.url} alt='Video' />
            </a>
          </VideoContainer>
        )
      })}
    </YouTubeContainer>
  )
}
