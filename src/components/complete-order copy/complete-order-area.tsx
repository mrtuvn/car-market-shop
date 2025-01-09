import { useQuery } from '@tanstack/react-query'
import { Order } from '../../types/Product'
import { fetchOrder } from '../../api/fetchOrder'
import { IoCheckmarkCircle } from 'react-icons/io5'
import usePrice from '../product/use-price'
import OrderDetails from './order-details'

interface Props {
  orderId?: number
}
const CompleteOrderArea: React.FC<Props> = ({ orderId = 1 }) => {
  const { data, isLoading } = useQuery<Order>({
    queryKey: ['order', orderId],
    queryFn: () => fetchOrder(orderId),
    enabled: !!orderId, // Chỉ gọi API khi có từ khóa
  })
  const { price: total } = usePrice(
    data && {
      amount: data.shipping_fee ? data.total + data.shipping_fee : data.total,
      currencyCode: 'USD',
    },
  )

  if (isLoading)
    return <div className="3xl:px-56 py-16 lg:py-20 xl:px-32 2xl:px-44">Loading...</div>

  return (
    <div className="py-10 xl:px-32">
      <div className="border-border-base text-brand-dark mb-6 flex items-center justify-start rounded-md border bg-slate-100 px-4 py-4 text-sm md:text-base lg:mb-8 lg:px-5">
        <span className="bg-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-opacity-20 ltr:mr-3 lg:ltr:mr-4 rtl:ml-3 lg:rtl:ml-4">
          <IoCheckmarkCircle className="text-brand h-5 w-5" />
        </span>
        Thank you. Your order has been received
      </div>

      <ul className="border-border-base mb-7 flex flex-col rounded-md border bg-slate-100 md:flex-row lg:mb-8 xl:mb-10">
        <li className="text-brand-dark border-border-two border-b border-dashed px-4 py-4 text-base font-semibold last:border-0 md:border-b-0 md:border-r md:py-5 lg:px-6 lg:py-6 lg:text-lg xl:px-8">
          <span className="text-brand-muted block text-xs font-normal uppercase leading-5">
            Order number:
          </span>
          {data?.tracking_number}
        </li>
        <li className="text-brand-dark border-b border-dashed border-gray-300 px-4 py-4 text-base font-semibold last:border-0 md:border-b-0 md:border-r md:py-5 lg:px-6 lg:py-6 lg:text-lg xl:px-8">
          <span className="text-brand-muted block text-[11px] font-normal uppercase leading-5">
            Date:
          </span>
          April 22, 2021
        </li>
        <li className="text-brand-dark border-b border-dashed border-gray-300 px-4 py-4 text-base font-semibold last:border-0 md:border-b-0 md:border-r md:py-5 lg:px-6 lg:py-6 lg:text-lg xl:px-8">
          <span className="text-brand-muted block text-[11px] font-normal uppercase leading-5">
            Email:
          </span>
          {data?.customer.email}
        </li>
        <li className="text-brand-dark border-b border-dashed border-gray-300 px-4 py-4 text-base font-semibold last:border-0 md:border-b-0 md:border-r md:py-5 lg:px-6 lg:py-6 lg:text-lg xl:px-8">
          <span className="text-brand-muted block text-[11px] font-normal uppercase leading-5">
            Total:
          </span>
          {total}
        </li>
        <li className="text-brand-dark border-b border-dashed border-gray-300 px-4 py-4 text-base font-semibold last:border-0 md:border-b-0 md:border-r md:py-5 lg:px-6 lg:py-6 lg:text-lg xl:px-8">
          <span className="text-brand-muted block text-[11px] font-normal uppercase leading-5">
            Payment method:
          </span>
          {data?.payment_gateway}
        </li>
      </ul>

      <p className="text-brand-dark mb-8 text-sm md:text-base">Pay with cash upon delivery.</p>

      <OrderDetails order={data} />
    </div>
  )
}
export default CompleteOrderArea
