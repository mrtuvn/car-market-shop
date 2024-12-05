'use client'

import cn from 'classnames'
import { useRef } from 'react'
//import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Swiper, Navigation, Autoplay, Pagination, Grid } from './slider'
import 'swiper/css/autoplay'
import 'swiper/css/grid'
import 'swiper/css/pagination'
//import { getDirection } from '../../../utils/get-direction';

const arrowLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
  </svg>
)

const arrowRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    />
  </svg>
)

type CarouselPropsType = {
  lang?: string
  className?: string
  buttonGroupClassName?: string
  prevActivateId?: string
  nextActivateId?: string
  prevButtonClassName?: string
  nextButtonClassName?: string
  buttonSize?: 'default' | 'small'
  centeredSlides?: boolean
  loop?: boolean
  slidesPerColumn?: number
  breakpoints?: {} | any
  spaceBetween?: number
  pagination?: {} | any
  navigation?: {} | any
  autoplay?: {} | any
  grid?: {} | any
}

export default function Carousel({
  lang,
  children,
  className = '',
  buttonGroupClassName = '',
  prevActivateId = '',
  nextActivateId = '',
  prevButtonClassName = ' start-3 xl:start-5 ',
  nextButtonClassName = ' end-3 xl:end-5',
  buttonSize = 'default',
  breakpoints,
  navigation = true,
  pagination = false,
  loop = false,
  spaceBetween = 20,
  grid,
  autoplay,
  ...props
}: React.PropsWithChildren<CarouselPropsType>) {
  //const dir = getDirection(lang);
  const dir = 'ltr'
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  let nextButtonClasses = cn(
    'swiper-next w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-white absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-md',
    { '3xl:text-2xl': buttonSize === 'default' },
    nextButtonClassName,
  )
  let prevButtonClasses = cn(
    'swiper-prev w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-white absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-md',
    { '3xl:text-2xl': buttonSize === 'default' },
    prevButtonClassName,
  )
  return (
    <div
      className={`carouselWrapper relative ${className} ${
        pagination ? 'dotsCircle' : 'dotsCircleNone'
      }`}
    >
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Grid]}
        autoplay={autoplay}
        breakpoints={breakpoints}
        spaceBetween={spaceBetween}
        dir={dir}
        pagination={pagination}
        grid={grid}
        navigation={
          navigation
            ? {
                prevEl: prevActivateId.length ? `#${prevActivateId}` : prevRef.current!, // Assert non-null
                nextEl: nextActivateId.length ? `#${nextActivateId}` : nextRef.current!, // Assert non-null
              }
            : {}
        }
        /*onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevActivateId.length ? `#${prevActivateId}`: prevRef.current!;
          swiper.params.navigation.nextEl = nextActivateId.length ? `#${nextActivateId}` : nextRef.current!;
        }}*/
        {...props}
      >
        {children}
      </Swiper>
      {Boolean(navigation) && (
        <div
          className={`absolute z-10 flex w-full items-center ${
            buttonGroupClassName ? buttonGroupClassName : 'top-2/4'
          }`}
        >
          {prevActivateId.length > 0 ? (
            <div className={prevButtonClasses} id={prevActivateId}>
              {arrowLeft}
            </div>
          ) : (
            <div ref={prevRef} className={prevButtonClasses}>
              {arrowLeft}
            </div>
          )}

          {nextActivateId.length > 0 ? (
            <div className={nextButtonClasses} id={nextActivateId}>
              {arrowRight}
            </div>
          ) : (
            <div ref={nextRef} className={nextButtonClasses}>
              {arrowRight}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
