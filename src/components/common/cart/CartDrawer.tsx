'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useAppSelector } from '@/hooks'
import type { Product } from '@/types/product'
import type { RootState } from '@/redux/store'

import CartEmpty from './CartEmpty'
import { useDrawer } from '@/contexts'
import usePrice from '@/utilities/usePrice'
import CartDrawerItem from './CartDrawerItem'

export default function CartDrawer() {
  const { displayDrawer, closeDrawer } = useDrawer()
  const { items, total, isEmpty } = useAppSelector((state: RootState) => state.rootReducer.cart) // function get item in store
  const { price: cartTotal } = usePrice({
    amount: total,
    currencyCode: 'USD',
  })
  return (
    <Dialog open={displayDrawer} onClose={closeDrawer} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Giỏ Hàng
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={closeDrawer}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Đóng</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  {!isEmpty ? (
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {items?.map((item: Product, index) => (
                            <CartDrawerItem key={index} item={item} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <CartEmpty />
                  )}
                </div>

                {!isEmpty && (
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Giá</p>
                      <p>{cartTotal}</p>
                    </div>

                    <div className="mt-6">
                      <Link
                        href="/checkout"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Thanh Toán
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        hoặc{' '}
                        <button
                          type="button"
                          onClick={() => closeDrawer()}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Tiếp tục mua hàng
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        <Link
                          href="/cart"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Vào trang giỏ hàng
                          <span aria-hidden="true"> &rarr;</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
