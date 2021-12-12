import React from "react"

import { Main } from "./NotFoundStyles"
import { Button } from "../../styles/GlobalComponents/Button"
import { useHistory } from "react-router"

export default function NotFound() {
  const history = useHistory()

  return (
    <Main>
      <img src='/img/404-dark.svg' alt='Not Found' />
      <div>
        <h1>404</h1>
        <h3>Page not found!</h3>
        <Button
          bg={({ theme }) => theme.colors.red}
          clr={({ theme }) => theme.colors.white}
          onClick={() => history.push("/")}
        >
          Home
        </Button>
      </div>
    </Main>
  )
}
