import Providers from '@/components/Providers'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'

export default ({ children }: { children: React.ReactNode }) => {
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
