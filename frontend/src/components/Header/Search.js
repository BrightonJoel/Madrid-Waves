import React, { useRef, useState } from "react"
import { useLazyQuery } from "@apollo/client"
import { SEARCHBLOGS } from "../../queries/SearchBlogs"
import SearchResults from "./SearchResults"

// Styles
import { SearchBar } from "./HomeHeaderStyles"
import { FaSearch } from "react-icons/fa"
import { Button } from "../../styles/GlobalComponents/Button"

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
        <input ref={searchQuery} type='text'></input>
        <Button
          bg={({ theme }) => theme.colors.red}
          clr={({ theme }) => theme.colors.neutral}
          onClick={handleClick}
        >
          Search
          <span>
            <FaSearch />
          </span>
        </Button>

        {isOpen && (
          <SearchResults data={data} loading={loading} setIsOpen={setIsOpen} />
        )}
      </SearchBar>
    </>
  )
}
