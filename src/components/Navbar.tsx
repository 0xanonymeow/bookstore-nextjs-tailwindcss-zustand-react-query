import { buttonVariants } from '@/components/Button'
import ThemeToggle from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Navbar = ({}) => {
  return (
    <div className="fixed backdrop-blur-sm bg-white/60 dark:bg-slate-900/60 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between transition-colors duration-500">
      <div className="container max-w-8xl mx-auto w-full flex justify-between items-center">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: 'link' }),
            'sm:text-xl font-bold text-white drop-shadow-lg'
          )}
        >
          Bedtime Story
        </Link>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href="/explore"
            className={cn(buttonVariants({ variant: 'ghost' }), 'sm: text-lg')}
          >
            Explore
          </Link>
          <Link
            href="/bestseller"
            className={cn(buttonVariants({ variant: 'ghost' }), 'sm: text-lg')}
          >
            Bestseller
          </Link>
          <Link
            href="/category"
            className={cn(buttonVariants({ variant: 'ghost' }), 'sm: text-lg')}
          >
            Category
          </Link>
          <Link
            href="/saved"
            className={cn(buttonVariants({ variant: 'ghost' }), 'sm: text-lg')}
          >
            Saved
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
