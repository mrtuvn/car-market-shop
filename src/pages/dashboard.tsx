import { LogoutButton } from '../components/auth/LogoutButton'
import Container from '../components/ui/container'
const Dashboard = () => {
  return (
    <Container>
      <h1 className="mb-6 text-2xl font-medium capitalize">Dashboard Page</h1>
      <LogoutButton />
    </Container>
  )
}

export default Dashboard
