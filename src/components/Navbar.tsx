import { buttonVariants } from '@/components/Button'
import ThemeToggle from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Navbar = ({}) => {
  return (
    <div
      data-aos="fade-right"
      className="fixed backdrop-blur-sm bg-white/60 dark:bg-slate-900/60 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between transition-colors duration-500"
    >
      <div className="container max-w-8xl mx-auto w-full flex justify-between items-center">
        <Link
          data-aos="fade-up"
          data-aos-delay="400"
          href="/"
          className={cn(
            buttonVariants({ variant: 'link' }),
            'text-xl font-bold text-slate-900 dark:text-white dark:drop-shadow-lg '
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
            data-aos="fade-up"
            data-aos-delay="450"
            href="/explore"
            className={cn(buttonVariants({ variant: 'ghost' }), 'text-lg')}
          >
            Explore
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-delay="500"
            href="/bestseller"
            className={cn(buttonVariants({ variant: 'ghost' }), 'text-lg')}
          >
            Bestseller
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-delay="550"
            href="/category"
            className={cn(buttonVariants({ variant: 'ghost' }), 'text-lg')}
          >
            Category
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-delay="600"
            href="/saved"
            className={cn(buttonVariants({ variant: 'ghost' }), 'text-lg')}
          >
            Saved
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
