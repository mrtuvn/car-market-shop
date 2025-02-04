'use client'
import React from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
  const [posts, setPosts] = React.useState([])
  const [loading, setLoading] = React.useState(true) // Add loading state
  const [error, setError] = React.useState(null) // Add error state

  const fetchPostsData = async () => {
    setLoading(true) // Set loading to true before fetching
    setError(null) // Clear any previous errors
    try {
      const response = await fetch(`https://dummyjson.com/posts?limit=4&skip=13`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const res = await response.json()
      return res
    } catch (error) {
      console.error('Error fetching data: ', error)
      setError(error.message) // Set the error message
      return null
    } finally {
      setLoading(false) // Set loading to false after fetch completes
    }
  }

  React.useEffect(() => {
    fetchPostsData().then((data) => {
      if (data && data.posts) {
        setPosts(data.posts)
      } else if (data === null) {
        console.error('error fetch data')
      }
    })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <ul className="grid grid-cols-3 gap-2">
        {posts.length > 0 ? (
          posts?.map((post) => (
            <li className="item flex flex-col gap-2" key={post.id}>
              <h3 className="font-semibold capitalize">{post.title}</h3>
              <p className="cursor-pointer underline">
                <Link to={`/post/${post.id}`}>View Details</Link>
              </p>
            </li>
          ))
        ) : (
          <p>NO posts</p>
        )}
      </ul>
    </>
  )
}

export default Posts
