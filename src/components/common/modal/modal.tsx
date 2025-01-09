import React, { FC, Fragment } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import CloseIcon from '../../../components/icons/close-icon'
import cn from 'classnames'

type ModalProps = {
  open?: boolean
  children?: React.ReactNode
  onClose: () => void
  variant?: 'center' | 'bottom'
}

const Modal: FC<ModalProps> = ({ children, open, onClose, variant = 'center' }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden"
        onClose={onClose}
      >
        <div
          className={cn('min-h-screen text-center lg:px-4', {
            'flex items-end justify-center': variant === 'bottom',
          })}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-40 cursor-pointer bg-black/70" />
          </TransitionChild>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className={cn({
              'inline-block h-screen align-middle': variant === 'center',
              'h-screen align-bottom': variant === 'bottom',
            })}
            aria-hidden="true"
          >
            &#8203;
          </span>

          {variant === 'bottom' ? (
            <TransitionChild
              as={Fragment}
              enter="transition-top ease-linear duration-500"
              enterFrom="top-[100vh]"
              enterTo="top-0"
              leave="transition-top ease-out duration-500"
              leaveFrom="top-0"
              leaveTo="top-[100vh]"
            >
              <div className="relative z-50 inline-block h-[75vh] w-full overflow-hidden p-0 align-middle shadow-xl transition-all md:w-[500px] xl:w-auto ltr:text-left rtl:text-right">
                <div className="relative h-full">
                  <CloseIcon
                    onClick={onClose}
                    aria-label="Close panel"
                    className="absolute top-2 opacity-0 md:top-4 ltr:right-2 md:ltr:right-4 rtl:left-2 md:rtl:left-4"
                  />
                  {children}
                </div>
              </div>
            </TransitionChild>
          ) : (
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-110"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-110"
            >
              <DialogPanel className="relative z-50 inline-block w-full transform overflow-hidden p-4 align-middle transition-all md:w-auto md:p-6 xl:p-8 ltr:text-left rtl:text-right">
                <div className="relative rounded-md">
                  <button
                    onClick={onClose}
                    aria-label="Close panel"
                    className="absolute right-0 top-1 z-10 h-8 w-8 lg:h-9 lg:w-9"
                  >
                    <CloseIcon />
                  </button>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          )}
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
