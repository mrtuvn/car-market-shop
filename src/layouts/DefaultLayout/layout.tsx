import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex min-h-svh flex-col flex-wrap">{children}</main>
      <Footer />
    </>
  )
}
