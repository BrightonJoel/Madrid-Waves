import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import useUser from "../../hooks/useUser"
import { useAuth } from "../../context/AuthContext"

// styles
import {
  NavContainer,
  Logo,
  NavLinks,
  Profile,
  Avatar,
  DropDown,
  SearchBar,
} from "./HomeHeaderStyles"
import { FaSearch, FaBars } from "react-icons/fa"
import { Button } from "../../styles/GlobalComponents/Button"

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState()
  const [isAvatar, setIsAvatar] = useState()
  const { currentUser, loading } = useUser()
  const { logout } = useAuth()
  const history = useHistory()

  return (
    <NavContainer>
      <Logo onClick={() => history.push("/")}>
        <img src='/img/Logo-Transparent.svg' alt='Logo' />
        <h1>Madrid Waves</h1>
      </Logo>
      <NavLinks className={isOpen ? "active" : ""}>
        <ul>
          {currentUser ? (
            <li>
              <Link to='/create'>Create</Link>
            </li>
          ) : (
            <Link to='/login'>Create</Link>
          )}

          <li>
            <Link to='/myblogs'>MyBlogs</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </NavLinks>
      <Profile>
        {currentUser && !loading ? (
          <Avatar onClick={() => setIsAvatar(!isAvatar)}>
            <h1>{currentUser.username.charAt(0)}</h1>
            <DropDown className={isAvatar ? "activeAvatar" : ""}>
              <Button
                onClick={logout}
                bg={({ theme }) => theme.colors.red}
                clr={({ theme }) => theme.colors.neutral}
              >
                Logout
              </Button>
            </DropDown>
          </Avatar>
        ) : (
          <Button
            onClick={() => history.push("/login")}
            bg={({ theme }) => theme.colors.red}
            clr={({ theme }) => theme.colors.neutral}
          >
            Login
          </Button>
        )}

        <FaBars
          className='Hamburger'
          onClick={() => {
            setIsOpen(!isOpen)
            console.log("Testing ...")
          }}
        />
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
