'use client'
import React from 'react'
import { useAppSelector } from '@/hooks'
import usePrice from '@/utilities/usePrice'
import CartEmpty from './CartEmpty'
import CartSummary from './CartSummary'
import TableCartItem from './TableCartItem'
import { RootState } from '@/redux/store'

const CartContent = () => {
  //const { items, total, isEmpty } = useAppSelector((state) => state.rootReducer.cart)
  const { items, total, isEmpty } = useAppSelector((state: RootState) => state.rootReducer.cart)
  const { price: cartTotal } = usePrice({
    amount: total,
    currencyCode: 'USD',
  })

  return (
    <div className="container">
      {!isEmpty ? (
        <div className="flex flex-col gap-8 xl:flex-row 2xl:gap-10">
          <h1 className="pb-5">Giỏ Hàng</h1>
          <div className="w-full xl:basis-9/12">
            <div className="relative mb-10 overflow-x-auto">
              <table className="text-fill-base w-full divide-y text-left text-sm">
                <thead className="text-fill-base bg-gray-100 text-sm">
                  <tr>
                    <th colSpan={2} className="px-6 py-3">
                      Tên Sản Phẩm
                    </th>
                    <th className="px-6 py-3">Giá</th>
                    <th className="px-6 py-3">Số Lượng</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{items?.map((item) => <TableCartItem item={item} key={item.id} />)}</tbody>
              </table>
            </div>
          </div>
          <div className="w-full xl:basis-3/12">
            <CartSummary cartTotal={cartTotal} />
          </div>
        </div>
      ) : (
        <div className="mt-40">
          <CartEmpty />
        </div>
      )}
    </div>
  )
}

export default CartContent
