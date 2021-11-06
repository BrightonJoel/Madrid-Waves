import React, { useState } from "react"
import { useHistory, NavLink } from "react-router-dom"
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
} from "./HomeHeaderStyles"
import { FaBars } from "react-icons/fa"
import { Button } from "../../styles/GlobalComponents/Button"
import Search from "./Search"

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
              <NavLink to='/create' activeClassName='nav-active'>
                Create
              </NavLink>
            </li>
          ) : (
            <NavLink to='/login' activeClassName='nav-active'>
              Create
            </NavLink>
          )}

          <li>
            <NavLink to='/myblogs' activeClassName='nav-active'>
              MyBlogs
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName='nav-active'>
              About
            </NavLink>
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
          }}
        />
      </Profile>
      <Search />
    </NavContainer>
  )
}
