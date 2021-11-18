import React from "react"
import useFetch from "../../hooks/useFetch"

export default function Pagination() {
  const { data, loading } = useFetch("blogs/count")
  const pageNumbers = []

  const noOfPages = Math.ceil(data / 5)
  console.log(noOfPages)

  for (let i = 1; i <= noOfPages; i++) {
    pageNumbers.push(i)
  }

  if (loading) <p>loading...</p>

  return (
    <div>
      {pageNumbers.map((page) => (
        <li key={page}>
          <a href='/'>{page}</a>
        </li>
      ))}
    </div>
  )
}
