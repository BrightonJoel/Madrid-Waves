import React from "react"
import useFetch from "../../hooks/useFetch"

//Styles
import { PaginationContainer } from "./Home/BlogsStyles"
import { Button } from "../../styles/GlobalComponents/Button"

export default function Pagination({ setStart, pageNumber, setPageNumber }) {
  const { data, loading } = useFetch("blogs/count")
  const pageNumbers = []
  const noOfPages = Math.ceil(data / 5)

  for (let index = 1; index <= noOfPages; index++) {
    let startFilter = 1
    if (index === 1) startFilter = 0
    else startFilter = (index - 1) * 5

    pageNumbers.push({
      pageno: index,
      limit: startFilter,
    })
  }

  if (loading) <p>loading...</p>

  return (
    <PaginationContainer>
      <ul>
        {pageNumbers.map((page) => (
          <li key={page.pageno}>
            <Button
              className={pageNumber === page.pageno ? "active" : ""}
              bg={({ theme }) => theme.colors.primaryBlue}
              clr={({ theme }) => theme.colors.white}
              onClick={() => {
                setPageNumber(page.pageno)
                setStart(page.limit)
              }}
            >
              {page.pageno}
            </Button>
          </li>
        ))}
      </ul>
    </PaginationContainer>
  )
}
