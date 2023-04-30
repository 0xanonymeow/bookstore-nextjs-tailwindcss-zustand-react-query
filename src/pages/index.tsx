import LargeHeading from '@/components/LargeHeading'
import Paragraph from '@/components/Paragraph'
import type { Metadata } from 'next'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Page() {
  const { theme, systemTheme } = useTheme()
  const [bannerOpacity, setBannerOpacity] = useState(0)
  const [fadeColor, setFadeColor] = useState('rgb(248 250 252)')

  useEffect(() => {
    setBannerOpacity(1)
    if (theme === 'dark' || (theme === 'system' && systemTheme === 'dark'))
      return setFadeColor('rgb(15 23 42)')
    setFadeColor('rgb(248 250 252)')
  }, [theme, systemTheme])

  return (
    <>
      <div
        className="absolute top-0 w-full h-1/2 xl:h-2/3 bg-no-repeat bg-cover transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 70%, ${fadeColor} 100%), url("/banner.png")`,
          opacity: bannerOpacity,
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
            <Paragraph className="three-d-p text-white dark:text-white lg:text-left">
              Create a Soothing Bedtime Environment with Our Handpicked Books
            </Paragraph>
            <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-[16/9] lg:absolute"></div>
          </div>
        </div>
      </div>
    </>
  )
}
