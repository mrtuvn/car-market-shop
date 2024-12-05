import { verifySession } from '@/app/lib/dal'
import AdminDashboard from '@/components/adminDashboard/AdminDashboard' // admin dashboard
import UserDashboard from '@/components/userDashboard/UserDashboard' // another screen for user dash
import { redirect } from 'next/navigation'
 
export default function Dashboard() {
  const session = await verifySession()
  const userRole = session?.user?.role // Assuming 'role' is part of the session object
 
  if (userRole === 'admin') {
    return <AdminDashboard />
  } else if (userRole === 'user') {
    return <UserDashboard />
  } else {
    redirect'/login')
  }
}