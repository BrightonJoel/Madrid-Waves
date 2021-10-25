import React from "react"
import { Button } from "../../styles/GlobalComponents/Button"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

// styles
import {
  NavContainer,
  Logo,
  NavLinks,
  Profile,
  SearchBar,
} from "./HomeHeaderStyles"

export default function HomeHeader() {
  return (
    <NavContainer>
      <Logo>
        <img src='/img/Logo-Transparent.svg' alt='Logo' />
        <h1>Madrid Waves</h1>
      </Logo>
      <NavLinks>
        <Link to='/create'>Create</Link>
        <Link to='/myblogs'>MyBlogs</Link>
        <Link to='/about'>About</Link>
      </NavLinks>
      <Profile>
        <Button
          bg={({ theme }) => theme.colors.red}
          clr={({ theme }) => theme.colors.neutral}
        >
          Login/signup
        </Button>
      </Profile>

      <SearchBar>
        <input type='text'></input>
        <Button
          bg={({ theme }) => theme.colors.red}
          clr={({ theme }) => theme.colors.neutral}
        >
          Search
          <span>
            <FaSearch />
          </span>
        </Button>
      </SearchBar>
    </NavContainer>
  )
}
