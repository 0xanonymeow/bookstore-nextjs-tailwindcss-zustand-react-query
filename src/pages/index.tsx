import LargeHeading from '@/components/LargeHeading'
import Paragraph from '@/components/Paragraph'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Page() {
  return (
    <>
      <div
        className="absolute w-full h-1/2 top-0"
        style={{
          backgroundImage: `url(/banner.png)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
        <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
          <div className="h-full gap-6 flex flex-col justify-start xl:justify-center items-center lg:items-start">
            <LargeHeading
              size="lg"
              className="three-d text-light-gold dark:text-white backdrop-blur-sm"
            >
              Cozy Bedtime Routine for Little Ones
            </LargeHeading>
            <Paragraph className="p-three-d text-white dark:text-white lg:text-left backdrop-blur-sm">
              Create a Soothing Bedtime Environment with Our Handpicked Books
            </Paragraph>
            <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-[16/9] lg:absolute"></div>
          </div>
        </div>
      </div>
    </>
  )
}
