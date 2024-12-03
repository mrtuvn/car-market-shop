'use client'

import Container from './container'

export default function BannerPromotion() {
  return (
    <div className="bg-slate-500 p-6">
      <Container className="text-red">
        <p className="text-medium text-center font-bold">Go live soon!</p>
      </Container>
    </div>
  )
}
