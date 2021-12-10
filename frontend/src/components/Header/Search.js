import React, { useRef, useState } from "react"
import { useLazyQuery } from "@apollo/client"
import { SEARCHBLOGS } from "../../queries/SearchBlogs"
import SearchResults from "./SearchResults"

// Styles
import { SearchBar, SearchBarContent } from "./HomeHeaderStyles"
import { FaSearch } from "react-icons/fa"

export default function Search() {
  const searchQuery = useRef()
  const [isOpen, setIsOpen] = useState(false)

  const [searchBlog, { data, loading }] = useLazyQuery(SEARCHBLOGS)

  async function handleClick(e) {
    e.preventDefault()
    setIsOpen(true)

    await searchBlog({
      variables: { where: { Title_contains: searchQuery.current.value } },
    })
  }

  return (
    <>
      <SearchBar>
        <SearchBarContent>
          <span>
            <FaSearch />
          </span>
          <input
            ref={searchQuery}
            type='text'
            placeholder='Search for blog title'
            onKeyUp={handleClick}
          ></input>
        </SearchBarContent>

        {isOpen && (
          <SearchResults
            data={data}
            loading={loading}
            setIsOpen={setIsOpen}
            searchQuery={searchQuery}
          />
        )}
      </SearchBar>
    </>
  )
}
