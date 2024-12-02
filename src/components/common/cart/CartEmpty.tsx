import Heading from '@/components/ui/heading'
import Text from '@/components/ui/text'
import React from 'react'

const CartEmpty = () => {
  return (
    <div className="m-auto flex flex-col items-center justify-center">
      <Heading variant="titleMedium" className="mb-1.5 pt-8">
        Giỏ hàng trống
      </Heading>
      <Text>Hãy thêm sản phẩm vào giỏ hàng</Text>
    </div>
  )
}

export default CartEmpty
