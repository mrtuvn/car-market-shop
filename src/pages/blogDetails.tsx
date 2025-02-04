import Container from '@/components/ui/container'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const BlogDetails = () => {
  let { id } = useParams()
  const [postDetail, setPostDetail] = React.useState({})

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/posts/${id}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const res = await response.json()
      return res
    } catch (error) {
      console.error('Error fetching data: ', error)
      return null
    }
  }

  useEffect(() => {
    fetchData().then((data) => {
      setPostDetail(data)
    })
  }, [id])

  if (postDetail === null) {
    return <Container>Loading...</Container>
  }

  if (!postDetail) {
    // check if postDetail is null after the fetch
    return <Container>Post not found.</Container> // Handle the case where the post is not found
  }

  return (
    <Container>
      {postDetail !== undefined && (
        <>
          <h1 className="text-[30px] font-black">{postDetail?.title}</h1>
          <p>{postDetail?.body}</p>
          <div>
            Tags:
            <ul className="flex flex-row flex-wrap gap-1">
              {postDetail.tags &&
                postDetail.tags.map((tag, index) => (
                  <li className="rounded border border-gray-400 p-1" key={index}>
                    {tag}
                  </li>
                ))}
            </ul>
          </div>
          <p>Total View: {postDetail.views}</p>
        </>
      )}
    </Container>
  )
}

export default BlogDetails
