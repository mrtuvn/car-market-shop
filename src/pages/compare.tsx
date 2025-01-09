import CompareList from '../components/compare/compareList'
import Container from '../components/ui/container'

const ComparePage = () => {
  return (
    <Container>
      <h1 className="mb-6 text-2xl font-medium capitalize">Compare</h1>
      <CompareList />
    </Container>
  )
}

export default ComparePage
