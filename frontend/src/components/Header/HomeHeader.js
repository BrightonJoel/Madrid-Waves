import React, { useState } from "react"
import { useHistory, NavLink } from "react-router-dom"
import useUser from "../../hooks/useUser"
import { useAuth } from "../../context/AuthContext"
import { useTheme } from "../../styles/theme"

// styles
import {
  NavContainer,
  Logo,
  NavLinks,
  Profile,
  Avatar,
  DropDown,
} from "./HomeHeaderStyles"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsSunFill, BsFillMoonFill } from "react-icons/bs"
import { GrPowerReset, GrLogout, GrClose } from "react-icons/gr"
import { Button } from "../../styles/GlobalComponents/Button"
import Search from "./Search"

export default function HomeHeader() {
  const { themeToggler, theme } = useTheme()
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
          {currentUser ? (
            <li>
              <NavLink to='/myblogs' activeClassName='nav-active'>
                MyBlogs
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink to='/login' activeClassName='nav-active'>
                MyBlogs
              </NavLink>
            </li>
          )}

          <li>
            <NavLink to='/about' activeClassName='nav-active'>
              About
            </NavLink>
          </li>
        </ul>
      </NavLinks>
      <Profile>
        {theme === "light" ? (
          <BsSunFill className='bulbOn' onClick={() => themeToggler()} />
        ) : (
          <BsFillMoonFill className='bulbOff' onClick={() => themeToggler()} />
        )}

        {loading ? (
          <p>Loading...</p>
        ) : currentUser ? (
          <Avatar onClick={() => setIsAvatar(!isAvatar)}>
            <h1>{currentUser.username.charAt(0).toUpperCase()}</h1>
            <DropDown className={isAvatar ? "activeAvatar" : ""}>
              <Button
                onClick={logout}
                bg={({ theme }) => theme.colors.red}
                clr={({ theme }) => theme.colors.white}
              >
                <span>
                  <GrLogout />
                </span>
                <p>Logout</p>
              </Button>
              <Button
                onClick={() => history.push("/forgotpassword")}
                bg={({ theme }) => theme.colors.red}
                clr={({ theme }) => theme.colors.white}
              >
                <span>
                  <GrPowerReset />
                </span>
                <p>Reset Password</p>
              </Button>
            </DropDown>
          </Avatar>
        ) : (
          <Button
            onClick={() => history.push("/login")}
            bg={({ theme }) => theme.colors.red}
            clr={({ theme }) => theme.colors.white}
          >
            Login
          </Button>
        )}

        {!isOpen ? (
          <GiHamburgerMenu
            className='Hamburger'
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          />
        ) : (
          <GrClose
            className='Hamburger'
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          />
        )}
      </Profile>
      <Search />
    </NavContainer>
  )
}
