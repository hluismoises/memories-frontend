import React from "react"
import Post from "./Post/Post"
import useStyles from "./styles"

const Posts = () => {
  const classes = useStyles()
  return (
    <>
      <Post />

      <h1>Posts</h1>
    </>
  )
}

export default Posts
