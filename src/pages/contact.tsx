import TodoRedux from '../components/todo-redux'
import Container from '../components/ui/container'

const ContactPage = () => {
  return (
    <>
      <Container>
        <h1 className="mb-6 text-2xl font-medium capitalize">Contact Page</h1>
        <TodoRedux />
      </Container>
    </>
  )
}

export default ContactPage
