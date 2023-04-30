import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
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
      </div>
    </div>
  )
}
