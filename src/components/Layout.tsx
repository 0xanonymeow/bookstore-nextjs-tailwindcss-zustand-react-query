import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Providers>
        <Toaster position="bottom-right" />
        {children}
        <Navbar />
      </Providers>
      {/* Allow for more height on mobile devices */}
      <div className="h-40 md: hidden"></div>
    </>
  )
}

Layout.displayName = 'Layout'

export default Layout
