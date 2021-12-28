import React, { useState } from "react"

// Styles
import { FaShare } from "react-icons/fa"
import { Share } from "../../pages/BlogPages/BlogDetailsStyles"

export default function ShareButton() {
  const [isCopied, setIsCopied] = useState(false)

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand("copy", true, text)
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(window.location.href)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Share>
      <FaShare onClick={handleCopyClick} />
      {isCopied && <span>Link Copied!</span>}
    </Share>
  )
}
