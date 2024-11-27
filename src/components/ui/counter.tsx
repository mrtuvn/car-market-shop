import cn from 'classnames'

import MinusIcon from './icons/minus-icon'
import PlusIcon from './icons/plus-icon'

type ButtonEvent = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => void

type CounterProps = {
  lang?: string
  value: number
  variant?: 'mercury' | 'cart' | 'single' | 'cardv2'
  onDecrement: ButtonEvent
  onIncrement: ButtonEvent
  className?: string
  disabled?: boolean
}

const Counter: React.FC<CounterProps> = ({
  lang,
  value,
  variant = 'mercury',
  onDecrement,
  onIncrement,
  className,
  disabled,
}) => {
  const size = variant === 'single' ? '22' : '13'
  return (
    <div
      className={cn(
        'button--mutiqty flex shrink-0 items-center justify-between overflow-hidden rounded',
        {
          'bg-brand shadow-counter h-8 rounded-3xl md:h-10':
            variant === 'mercury' || variant === 'cardv2',
          'mb-5 h-11 w-40 rounded-md bg-[#f3f5f9] px-3 md:h-14': variant === 'single',
          'inline-flex': variant === 'cart',
        },
        className,
      )}
    >
      <button
        onClick={onDecrement}
        className={cn(
          'flex shrink-0 items-center justify-center transition-all duration-300 ease-in-out focus:outline-none focus-visible:outline-none',
          {
            'text-heading ms-1 h-8 w-8 rounded-2xl text-white md:w-12':
              variant === 'mercury' || variant === 'cardv2',
            'scale-80 text-brand-dark hover:bg-fill-four !h-8 !w-8 transform rounded-full lg:scale-100 ltr:ml-auto rtl:mr-auto':
              variant === 'single',
            'border-border-three hover:bg-brand text-brand-muted hover:border-brand hover:text-brand-light !h-6 !w-6 rounded-full border pr-0':
              variant === 'cart',
          },
        )}
      >
        <span className="sr-only">button-minus</span>
        <MinusIcon width={size} height={size} opacity="1" />
      </button>
      <span
        className={cn(
          'duration-250 flex h-full shrink-0 cursor-default items-center justify-center font-semibold transition-colors ease-in-out',
          {
            'w-6 text-sm text-white md:text-base': variant === 'mercury' || variant === 'cardv2',
            'w-12 text-base md:w-12 md:text-[17px]': variant === 'single',
            'text-15px w-9': variant === 'cart',
          },
        )}
      >
        {value}
      </span>
      <button
        onClick={onIncrement}
        disabled={disabled}
        className={cn(
          'group flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none focus-visible:outline-none',
          {
            'text-heading me-1 h-8 w-8 rounded-2xl text-white md:w-12':
              variant === 'mercury' || variant === 'cardv2',
            'scale-80 text-heading hover:bg-fill-four !h-8 !w-8 justify-center rounded-full !pr-0 lg:scale-100':
              variant === 'single',
            'text-brand-muted border-border-three hover:bg-brand hover:border-brand hover:text-brand-light !h-6 !w-6 rounded-full border !pr-0':
              variant === 'cart',
          },
        )}
        title={disabled ? 'Out Of Stock' : ''}
      >
        <span className="sr-only">button-plus</span>
        <PlusIcon width={size} height={size} opacity="1" />
      </button>
    </div>
  )
}

export default Counter
