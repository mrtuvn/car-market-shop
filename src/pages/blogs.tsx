import Posts from '@/components/post/Posts'
import Container from '../components/ui/container'

const BlogsPage = () => {
  return (
    <>
      <Container>
        <h1 className="mb-6 text-2xl font-medium capitalize">Blog Articles</h1>

        <Posts />
      </Container>
    </>
  )
}

export default BlogsPage
