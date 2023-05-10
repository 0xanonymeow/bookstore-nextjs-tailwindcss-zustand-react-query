import LargeHeading from '@/components/LargeHeading'
import Paragraph from '@/components/Paragraph'
import { useGetPopularBooks } from '@/hooks/query/useGetPopularBooks'
import { Book } from '@/store'
import { map, slice } from 'lodash'
import type { Metadata } from 'next'
import Image from 'next/image'
import { SyntheticEvent, useRef } from 'react'

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Page() {
  const containerRef = useRef(null)

  // const [bind, unbind] = useScrollSnap(containerRef, {
  //   snapDestinationY: '95%',
  // })

  const { data } = useGetPopularBooks()

  const onImgError = (e: SyntheticEvent<HTMLImageElement, Event>) =>
    (e.currentTarget.src = '/books/blank.jpg')

  return (
    <div
      ref={containerRef}
      className="absolute h-full w-full top-0 left-0 overflow-x-hidden flex justify-center"
    >
      <div className="w-full flex flex-col max-w-4xl xl:max-w-7xl">
        <div className="container mt-[24%] md:mt-[12%] mx-auto w-full h-full min-h-screen ">
          <div className=" h-2/3 gap-6 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-auto md:h-full gap-6 flex flex-col justify-center order-last md:order-first">
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
        <div className="w-full h-full max-w-7xl flex flex-col justify-center">
          <LargeHeading size="sm" className="lg:text-center">
            Popular Now
          </LargeHeading>
          <div className="container w-full h-full grid grid-cols-4 mt-16 gap-4">
            {slice(
              map(data, ({ id, title, author, price, img_id }: Book) => (
                <div key={id} className="">
                  <img
                    src={`/books/${img_id}.jpg`}
                    alt="title"
                    onError={onImgError}
                  />
                  <Paragraph>{title}</Paragraph>
                  <Paragraph size="sm">{author}</Paragraph>
                  <Paragraph size="sm">${price}</Paragraph>
                </div>
              )),
              0,
              8
            )}
          </div>
          <div className="h-screen"></div>
        </div>
      </div>
    </div>
  )
}
