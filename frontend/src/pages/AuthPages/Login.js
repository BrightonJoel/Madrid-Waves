import React, { useRef, useState } from "react"
import { useHistory } from "react-router"

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
import { Link } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { login, saveUser } = useAuth()
  const history = useHistory()

  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    const userDetails = {
      identifier: emailRef.current.value,
      password: passwordRef.current.value,
    }

    const { loading, error, data } = await login(userDetails)
    saveUser(data)
    console.log(data, error)

    if (error) {
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
        {errorMsg && <ErrorWrapper>{errorMsg}</ErrorWrapper>}
        <form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input type='email' ref={emailRef} required />
          <Label>Password</Label>
          <Input type='password' ref={passwordRef} />
          <Button
            type='submit'
            disabled={loading}
            bg={({ theme }) => theme.colors.primaryBlue}
            clr={({ theme }) => theme.colors.neutral}
            w='100%'
          >
            Login
          </Button>
        </form>

        <p>New to the page?</p>
        <Link to='/signup'>Sign in</Link>
      </Wrapper>
    </Container>
  )
}
