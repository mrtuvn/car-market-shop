import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

export default function ModernLayout({
  sidebar,
  children,
}: {
  sidebar: React.ReactElement
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-svh flex-row flex-wrap">
        <div className="sideBar">{sidebar}</div>
        <div className="contentSide">{children}</div>
      </main>
      <Footer />
    </>
  )
}
