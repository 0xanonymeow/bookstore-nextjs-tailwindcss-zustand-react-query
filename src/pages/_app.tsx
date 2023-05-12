import Layout from '@/components/Layout'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <div className={cn('bg-white text-slate-900 antialiased', inter.className)}>
      <div
        className={cn(
          'min-h-screen bg-slate-50 dark:bg-slate-900 antialiased transition-colors duration-500'
        )}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <div className="absolute top-1/2 left-1/2"></div>
      </div>
    </div>
  )
}
