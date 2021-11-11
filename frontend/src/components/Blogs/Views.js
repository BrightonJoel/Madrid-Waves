import React, { useLayoutEffect } from "react"
import { useMutation } from "@apollo/react-hooks"
import { UPDATEVIEWS } from "../../queries/BlogDetailsQuery"

// styles
import { ViewsContainer } from "../../pages/BlogPages/BlogDetailsStyles"
import { FaEye } from "react-icons/fa"

export default function Views({ id, view }) {
  const [UpdateViews] = useMutation(UPDATEVIEWS, {
    options: {
      context: {
        headers: {
          credentials: "include",
        },
      },
    },
  })

  useLayoutEffect(() => {
    async function increaseView() {
      await UpdateViews({
        variables: {
          id: id,
          Views: view + 1,
        },
      })
    }
    increaseView()
  }, [])

  return (
    <>
      <ViewsContainer>
        <FaEye />
        <span>{view}</span>
      </ViewsContainer>
    </>
  )
}
