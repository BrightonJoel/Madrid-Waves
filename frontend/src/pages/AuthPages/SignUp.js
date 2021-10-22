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

export default function SignUp() {
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const { signUp } = useAuth()
  const history = useHistory()

  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setErrorMsg("Passwords did not match")
    }

    const userDetails = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    const { loading, error, data } = await signUp(userDetails)
    console.log(data, error)

    if (error) {
      setLoading(loading)
      setErrorMsg(error)
    } else {
      setLoading(loading)
      history.push("/login")
    }
  }

  return (
    <Container>
      <Wrapper>
        {loading && <p>loading.....</p>}
        <h2>Sign up to Madrid waves</h2>
        {errorMsg && <ErrorWrapper>{errorMsg}</ErrorWrapper>}
        <form onSubmit={handleSubmit}>
          <Label>Username</Label>
          <Input type='text' ref={usernameRef} required />
          <Label>Email</Label>
          <Input type='email' ref={emailRef} required />
          <Label>Password</Label>
          <Input type='password' ref={passwordRef} />
          <Label>Confirm Password</Label>
          <Input type='password' ref={passwordConfirmRef} />
          <Button
            type='submit'
            bg={({ theme }) => theme.colors.primaryBlue}
            clr={({ theme }) => theme.colors.neutral}
            w='100%'
          >
            Create Account
          </Button>
        </form>

        <p>Already have an account?</p>
        <Link to='/login'>Login</Link>
      </Wrapper>
    </Container>
  )
}
