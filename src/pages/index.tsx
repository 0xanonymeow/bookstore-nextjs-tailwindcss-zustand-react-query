import LargeHeading from '@/components/LargeHeading'
import Paragraph from '@/components/Paragraph'
import type { Metadata } from 'next'
import { useTheme } from 'next-themes'

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Page() {
  const { theme } = useTheme()

  return (
    <>
      <div
        className="absolute top-0 w-full h-1/2 xl:h-2/3"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 80%, ${
            theme === 'dark' ? 'rgb(15 23 42)' : 'rgb(248 250 252)'
          }100%), url("/banner.png")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
        <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
          <div className="h-full gap-6 flex flex-col justify-start xl:justify-center items-center lg:items-start">
            <LargeHeading
              size="lg"
              className="three-d text-light-gold dark:text-white "
            >
              Cozy Bedtime Routine for Little Ones
            </LargeHeading>
            <Paragraph className="p-three-d text-white dark:text-white lg:text-left">
              Create a Soothing Bedtime Environment with Our Handpicked Books
            </Paragraph>
            <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-[16/9] lg:absolute"></div>
          </div>
        </div>
      </div>
    </>
  )
}
