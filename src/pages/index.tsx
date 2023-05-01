import LargeHeading from '@/components/LargeHeading'
import Paragraph from '@/components/Paragraph'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Page() {
  return (
    <>
      <div className="relative h-full flex items-center justify-center overflow-x-hidden">
        <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
          <div className="h-full gap-6 flex flex-col md:flex-row">
            <div className="w-1/2h-full flex flex-col justify-center order-last md:order-first">
              <LargeHeading className="three-d dark:text-light-gold text-slate-900">
                Cozy Bedtime Routine for Little Ones
              </LargeHeading>
              <Paragraph className="three-d-p dark:text-white text-slate-400 lg:text-left md:text-xl lg:text-2xl xl:text-4xl">
                Create a Soothing Bedtime Environment with Our Handpicked Books
              </Paragraph>
            </div>
            {/* <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-[16/9] lg:absolute"></div> */}
            <div className="relative w-full md:w-1-2 h-1/2 md:h-auto aspect-square floating drop-shadow-sm">
              <Image
                priority
                fill
                src="/art-1.png"
                alt="art-1"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
