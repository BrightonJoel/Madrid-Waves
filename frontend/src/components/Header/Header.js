import React from "react"

// styles
import { Head } from "./HeaderStyles"

export default function Header() {
  return (
    <Head>
      <img
        src='/img/Logo-Transparent.svg'
        alt='Logo'
        height='132'
        width='132'
      />
      <h1>Madrid Waves</h1>
    </Head>
  )
}
