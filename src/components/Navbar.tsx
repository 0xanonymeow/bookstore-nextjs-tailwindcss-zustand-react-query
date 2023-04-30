import Link from 'next/link'
import { buttonVariants } from '@/components/Button'
import ThemeToggle from '@/components/ThemeToggle'

const Navbar = ({}) => {
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between transition-colors duration-500">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className={buttonVariants({ variant: 'link' })}>
          Bedtime Story
        </Link>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href="/explore"
            className={buttonVariants({ variant: 'ghost' })}
          >
            Explore
          </Link>
          <Link
            href="/categories"
            className={buttonVariants({ variant: 'ghost' })}
          >
            Bestseller
          </Link>
          <Link href="/saved" className={buttonVariants({ variant: 'ghost' })}>
            Category
          </Link>
          <Link
            href="/categories"
            className={buttonVariants({ variant: 'ghost' })}
          >
            Saved
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
