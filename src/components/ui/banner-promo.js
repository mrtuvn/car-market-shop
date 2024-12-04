'use client'

import Container from './container'

export default function BannerPromotion() {
  return (
    <div className="min-h-[40px] p-2">
      <Container className="text-red">
        <p className="text-medium text-center font-bold">Go live soon!</p>
      </Container>
    </div>
  )
}
