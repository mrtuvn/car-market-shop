import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}
