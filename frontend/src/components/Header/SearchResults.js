import React from "react"

export default function SearchResults({ data, loading }) {
  if (loading) return <p>Loading...</p>
  console.log(data)
  return (
    <div>
      {/* <p>Search Result</p> */}
      {/* <p>{data.blogs.Title}</p> */}
    </div>
  )
}
