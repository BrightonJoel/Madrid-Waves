import React from "react"

// Styles
import { FooterStyled } from "./FooterStyles"

export default function Footer() {
  const date = new Date()
  return (
    <FooterStyled>
      <h3>© {date.getFullYear()} The Madrid Waves </h3>
    </FooterStyled>
  )
}
