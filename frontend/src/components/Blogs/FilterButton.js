import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { FETCHCATEGORY } from "../../queries/fetchBlogCategory"

// Styles
import { BlogHeader, FilterPopup, CategoryLinks } from "./Home/BlogsStyles"
import { FaFilter } from "react-icons/fa"
import { Button } from "../../styles/GlobalComponents/Button"

export default function FilterButton() {
  const [showFilter, setShowFilter] = useState(false)
  const { data, loading, error } = useQuery(FETCHCATEGORY)

  return (
    <>
      <BlogHeader>
        <h2>Blogs</h2>

        <Button
          bg={({ theme }) => theme.colors.blue}
          clr={({ theme }) => theme.colors.white}
          onClick={() => setShowFilter(!showFilter)}
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

            <NavLink activeClassName='nav-active' exact to='/'>
              All Blogs
            </NavLink>
          </CategoryLinks>
        </FilterPopup>
      )}
    </>
  )
}
