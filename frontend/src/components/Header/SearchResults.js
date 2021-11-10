import React from "react"
import { Link } from "react-router-dom"

// Styles
import {
  SearchResultContainer,
  SearchResultHeader,
  Center,
} from "./SearchResultsStyles"
import { CgCloseO } from "react-icons/cg"

export default function SearchResults({ data, loading, setIsOpen }) {
  function handleClick() {
    setIsOpen(false)
  }

  return (
    <>
      {loading ? (
        <SearchResultContainer>
          <Center>
            <img src='/img/Logo-Spinner.svg' alt='loader' />
          </Center>
        </SearchResultContainer>
      ) : (
        <SearchResultContainer>
          <SearchResultHeader>
            <h2>
              Search Results - ({data && data.blogs && data.blogs.length})
            </h2>
            <CgCloseO className='close' onClick={handleClick} />
          </SearchResultHeader>

          {data && data.blogs && data.blogs.length === 0 && (
            <li>No blogs found</li>
          )}

          <ul>
            {data &&
              data.blogs &&
              data.blogs.map((blog) => (
                <li key={blog.id} onClick={handleClick}>
                  <Link to={`/details/${blog.id}`}>{blog.Title}</Link>
                </li>
              ))}
          </ul>
        </SearchResultContainer>
      )}
    </>
  )
}
