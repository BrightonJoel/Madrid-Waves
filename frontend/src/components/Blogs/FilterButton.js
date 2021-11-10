import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { FETCHCATEGORY } from "../../queries/fetchBlogCategory"

// Styles
import { BlogHeader, FilterPopup, CategoryLinks } from "./BlogsStyles"
import { FaFilter } from "react-icons/fa"
import { Button } from "../../styles/GlobalComponents/Button"

export default function FilterButton() {
  const [showFilter, setShowFilter] = useState(false)
  const { data, loading, error } = useQuery(FETCHCATEGORY)

  async function handleFilter() {
    setShowFilter(!showFilter)
  }

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
          <CategoryLinks>
            {loading && <span>Loading...</span>}
            {error && <span>{error.message}</span>}
            {!loading &&
              data &&
              data.blogCategories &&
              data.blogCategories.map((category) => (
                <NavLink
                  activeClassName='nav-active'
                  key={category.id}
                  to={`/category/${category.id}`}
                >
                  {category.Name}
                </NavLink>
              ))}
          </CategoryLinks>
        </FilterPopup>
      )}
    </>
  )
}
