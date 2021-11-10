import React, { useState } from "react"
import { useLazyQuery } from "@apollo/client"
import { GETBLOGS } from "../../queries/GetAllBlogs"

// Styles
import { BlogHeader, FilterPopup } from "./BlogsStyles"
import { FaFilter } from "react-icons/fa"
import { Button } from "../../styles/GlobalComponents/Button"

export default function FilterButton() {
  const [showFilter, setShowFilter] = useState(false)
  const [fetchBlogByCategory, { data, loading }] = useLazyQuery(GETBLOGS)

  async function handleFilter() {
    setShowFilter(!showFilter)
    console.log("Clicked Filter button")
  }

  async function handleCategory(categoryId) {
    await fetchBlogByCategory({
      variables: { where: { blogCategories: { id: "1" } } },
    })
  }

  console.log(data)

  return (
    <>
      <BlogHeader>
        <h2>Blogs</h2>

        <Button
          bg={({ theme }) => theme.colors.primaryBlue}
          clr={({ theme }) => theme.colors.neutral}
          onClick={handleFilter}
        >
          Filter
          <FaFilter className='filter' />
        </Button>
      </BlogHeader>

      {showFilter && (
        <FilterPopup>
          <div>
            <span onClick={handleCategory}>Champions League</span>
            <span>Laliga</span>
            <span>Copa Del Rey</span>
          </div>
        </FilterPopup>
      )}
    </>
  )
}
