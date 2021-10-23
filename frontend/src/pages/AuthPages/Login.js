import React, { useRef, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

import { useAuth } from "../../context/AuthContext"

// styles
import {
  Container,
  Wrapper,
  Label,
  Input,
  ErrorWrapper,
} from "./AuthPageStyles"
import { Button } from "../../styles/GlobalComponents/Button"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { login, saveUser, logout } = useAuth()
  const history = useHistory()

  const [errorMsg, setErrorMsg] = useState(null)
  const [navigateLink, setNavigateLink] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleLogout(e) {
    const error = await logout()
    setNavigateLink(null)
    setErrorMsg(error)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const userDetails = {
      identifier: emailRef.current.value,
      password: passwordRef.current.value,
    }

    setLoading(true)
    const { loading, error, data } = await login(userDetails)
    saveUser(data)

    if (error === "Logout and try again") {
      setNavigateLink("/logout")
      setErrorMsg(error)
      setLoading(loading)
    } else if (error) {
      setLoading(loading)
      setErrorMsg(error)
    } else {
      setLoading(loading)
      history.push("/")
    }
  }

  return (
    <Container>
      <Wrapper>
        <h2>Log in to Madrid Waves</h2>
        {errorMsg && (
          <ErrorWrapper>
            {errorMsg}
            {navigateLink && (
              <Button
                bg={({ theme }) => theme.colors.red}
                clr={({ theme }) => theme.colors.neutral}
                mt='0px'
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input type='email' ref={emailRef} required />
          <Label>Password</Label>
          <Input type='password' ref={passwordRef} required />

          {loading ? (
            <Button
              type='submit'
              disabled={loading}
              bg={({ theme }) => theme.colors.primaryBlue}
              clr={({ theme }) => theme.colors.neutral}
              mt='30px'
              w='100%'
            >
              Loding...
            </Button>
          ) : (
            <Button
              type='submit'
              disabled={loading}
              bg={({ theme }) => theme.colors.primaryBlue}
              clr={({ theme }) => theme.colors.neutral}
              mt='30px'
              w='100%'
            >
              Login
            </Button>
          )}
        </form>

        <p>New to the page?</p>
        <Link to='/signup'>Sign in</Link>
      </Wrapper>
    </Container>
  )
}
