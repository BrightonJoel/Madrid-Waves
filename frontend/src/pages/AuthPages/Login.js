import React, { useRef, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import useUser from "../../hooks/useUser"
import { useAuth } from "../../context/AuthContext"

// styles
import {
  Background,
  Container,
  Wrapper,
  Label,
  Input,
  ErrorWrapper,
  UserFoundContainer,
} from "./AuthPageStyles"
import { Button } from "../../styles/GlobalComponents/Button"

export default function Login() {
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()
  const { currentUser, loading: userLoading } = useUser()

  const { login } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    const userDetails = {
      identifier: emailRef.current.value,
      password: passwordRef.current.value,
    }

    setLoading(true)
    const { loading, error } = await login(userDetails)

    if (error) {
      emailRef.current.value = ""
      passwordRef.current.value = ""
      setLoading(loading)
      setErrorMsg(error.message[0].messages[0].message)
      setTimeout(() => {
        setErrorMsg(false)
      }, 5000)
    } else {
      setLoading(loading)
      history.push("/")
    }
  }

  return (
    <Background>
      <Container>
        {!currentUser ? (
          <Wrapper>
            <h2>Log in to Madrid Waves</h2>
            {errorMsg && <ErrorWrapper>{errorMsg}</ErrorWrapper>}
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
            <br/>
            <p>Forgot Password?</p>
            <Link to='/forgotpassword'>Reset password</Link>
          </Wrapper>
        ) : (
          <UserFoundContainer>
            <Link to='/'>
              <img src='/img/directions.svg' alt='Already logged in' />
            </Link>
          </UserFoundContainer>
        )}
      </Container>
    </Background>
  )
}
