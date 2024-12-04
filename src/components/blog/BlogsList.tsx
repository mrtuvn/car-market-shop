'use client'
import React, { useEffect, useState } from 'react'

const BlogsList = () => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogsFromDummyApi = () => {
    const limit = 4
    fetch(`https://dummyjson.com/posts?limit=${limit}`)
      .then((res) => res.json())
      .then((res) => setBlogs(res.posts))
  }

  useEffect(() => {
    fetchBlogsFromDummyApi()
  }, [])

  return (
    <>
      <p className="mb-4 text-center text-[3rem] font-extrabold">Blogs</p>
      <div className="sm:grid-col-2 grid gap-3 p-2 py-4 md:grid-cols-4 md:px-4">
        {blogs.map((blog, id) => (
          <div key={blog.id}>
            <h3 className="text-bold font-bold">{blog.title}</h3>
            <p>{blog.body}</p>

            {blog?.tags?.map((tag, index) => (
              <span
                className="ms-3 mt-4 inline-block rounded border border-r-2 border-gray-400 p-1"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default BlogsList
