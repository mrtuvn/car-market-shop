'use client'
import React, { useEffect } from 'react'
import getPosts from './getPosts'

const Posts = () => {
  const [posts, setPosts] = React.useState([])

  const fetch = async () => {
    const data = await getPosts()
    setPosts(data)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      <p className="text-bold my-3 text-center text-[30px] font-semibold text-black">Posts</p>
      <ul className="grid grid-cols-3 gap-2">
        {posts?.map((post) => (
          <li className="item flex flex-col gap-2" key={post.id}>
            <h3 className="font-semibold capitalize">{post.title}</h3>
            <p>{post.body}</p>
            <p className="cursor-pointer underline">View Details</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Posts
