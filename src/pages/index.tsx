import LargeHeading from '@/components/LargeHeading'
import Paragraph from '@/components/Paragraph'
import { useGetPopularBooks } from '@/hooks/query/useGetPopularBooks'
import { pascalCase } from '@/lib/utils'
import { Book } from '@/store'
import { forEach, map, slice } from 'lodash'
import type { Metadata } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Page() {
  const { data } = useGetPopularBooks()
  const [src, setSrc] = useState([...Array(8)])

  useEffect(() => {
    const srcArr = [...src]
    forEach(data, async ({ img_id }, i) => {
      try {
        ;(await import(`../../public/books/${img_id}.jpg`)).default
        srcArr[i] = `/books/${img_id}.jpg`
      } catch (e) {
        srcArr[i] = '/books/blank.jpg'
      } finally {
        setSrc([...srcArr])
      }
    })
    console.log(src)
  }, [data])

  return (
    <div className="w-full  flex items-center justify-center py-16">
      <div className="w-full flex flex-col max-w-4xl xl:max-w-7xl ">
        <div className="container mt-[24%] md:mt-[12%] mx-auto w-full min-h-[30vh] ">
          <div className="h-2/3 gap-6 flex flex-col md:flex-row ">
            <div className="w-full flex flex-col justify-between py-16 order-last md:order-first ">
              <LargeHeading
                data-aos="fade-right"
                data-aos-delay="300"
                className="three-d dark:text-light-gold text-slate-900"
              >
                Cozy Bedtime Routine for Little Ones
              </LargeHeading>
              <Paragraph
                data-aos="fade-right"
                data-aos-delay="350"
                className="three-d-p dark:text-white text-slate-400 lg:text-left md:text-xl lg:text-2xl xl:text-4xl"
              >
                Create a Soothing Bedtime Environment with Our Handpicked Books
              </Paragraph>
            </div>
            <div className="relative w-full h-auto md:w-1/2 aspect-square floating drop-shadow-sm ">
              <Image
                data-aos="fade-left"
                data-aos-delay="300"
                priority
                fill
                src="/art-1.png"
                alt="art-1"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full max-w-7xl flex flex-col justify-center mt-[12%]">
          <LargeHeading
            data-aos="fade-down"
            data-aos-delay="300"
            size="md"
            className="lg:text-center"
          >
            Popular Now
          </LargeHeading>
          <div className="container w-full h-full grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 mt-32 gap-4 items-start">
            {slice(
              map(data, ({ id, title, author, price }: Book, i: number) => (
                <div
                  data-aos="fade-right"
                  data-aos-delay={300 + 100 * i}
                  key={id}
                  className="flex flex-col items-center"
                >
                  <Image
                    className="w-2/3 sm:w-full"
                    width={400} // aspect-ratio of the image not the actual size
                    height={700} // the actual size is determined by the tailwindcss below
                    src={src[i]}
                    alt="title"
                    style={{ objectFit: 'contain' }}
                  />
                  <div className="flex flex-col justify-between h-40">
                    <Paragraph className="mt-8 font-bold sm:h-14 h-auto">
                      {pascalCase(title)}
                    </Paragraph>
                    <Paragraph size="sm" className="italic">
                      {author}
                    </Paragraph>
                    <Paragraph size="sm" className="font-bold">
                      ${price}
                    </Paragraph>
                  </div>
                </div>
              )),
              0,
              8
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
