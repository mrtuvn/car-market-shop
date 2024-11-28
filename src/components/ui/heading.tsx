import React, { JSXElementConstructor, CSSProperties } from 'react'
import cn from 'classnames'

interface Props {
  variant?: Variant
  className?: string
  style?: CSSProperties
  children?: React.ReactNode | any
  html?: string
}

type Variant =
  | 'mediumHeading'
  | 'heading'
  | 'base'
  | 'title'
  | 'titleMedium'
  | 'titleLarge'
  | 'pageHeading'
  | 'subHeading'
  | 'checkoutHeading'

const Heading: React.FC<Props> = ({ style, className, variant = 'base', children, html }) => {
  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string
  } = {
    base: 'h3',
    heading: 'h2',
    mediumHeading: 'h3',
    title: 'h2', // Collection card
    titleMedium: 'h3',
    titleLarge: 'h2',
    pageHeading: 'h1',
    subHeading: 'h2',
    checkoutHeading: 'h3',
  }

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap![variant!]

  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {}

  return (
    <Component
      className={cn(
        'text-fill-base',
        {
          'text-sm font-semibold': variant === 'base',
          'text-base font-semibold': variant === 'title',
          'text-fill-base text-xl font-bold': variant === 'titleMedium',
          'text-[16px] font-semibold xl:text-[20px] xl:leading-8': variant === 'titleLarge',
          'text-[16px] font-bold lg:leading-7': variant === 'mediumHeading',
          'font-manrope text-lg font-bold lg:text-xl xl:text-[22px] xl:leading-8':
            variant === 'heading',
          'text-brand-dark text-lg font-semibold lg:text-xl xl:text-[26px] xl:leading-8':
            variant === 'checkoutHeading',
        },
        className,
      )}
      style={style}
      {...htmlContentProps}
    >
      {children}
    </Component>
  )
}

export default Heading
