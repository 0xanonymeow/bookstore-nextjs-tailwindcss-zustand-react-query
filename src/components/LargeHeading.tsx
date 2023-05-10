import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes, forwardRef } from 'react'

const headingVariants = cva(
  'text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter transition-colors duration-100',
  {
    variants: {
      size: {
        default: 'text-4xl md:text-5xl lg:text-6xl',
        lg: 'text-5xl md:text-6xl lg:text-7xl',
        md: 'text-3xl md:text-4xl lg:text-5xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = forwardRef<
  HTMLHeadingElement,
  LargeHeadingProps
>(({ className, size, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(headingVariants({ size, className }))}
      {...props}
    >
      {children}
    </p>
  )
})

LargeHeading.displayName = 'LargeHeading'

export default LargeHeading
