import BannerGrid from '../components/banner/banner-grid'
import ProductWithBestDeals from '../components/product-feeds/product-with-best-deals'
import CategoryGridBlock from '../components/category-grid/category-grid-block'
import HeroSliderBlock from '../components/hero/hero-slider-block'
import Listingtabs from '../components/listingtabs'
import Container from '../components/ui/container'
import {
  homeGridSlider as gridSlider,
  homeHeroSlider as heroSlider,
  homeGridHero as gridHero,
  homeGridHero2 as gridHero2,
} from '../settings/banner'

import PopularProduct from '../components/product-feeds/popular-product'
import NewProduct from '../components/product-feeds/new-product'
import Posts from '../components/post/Posts'

const HomePage = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-[5px]">
          <HeroSliderBlock
            heroBanner={heroSlider}
            showHeroContent={true}
            className={`mb-5 xl:col-span-8 xl:mb-12`}
            contentClassName="p-7 sm:py-18 xl:py-10 sm:px-16 xl:px-24 md:min-h-[270px] xl:min-h-[375px] rounded"
          />
          <BannerGrid
            data={gridSlider}
            grid={1}
            girdClassName="xl:gap-[5px]"
            className="mb-5 xl:col-span-4 xl:mb-12"
          />
        </div>
        <CategoryGridBlock className="mb-8 lg:mb-12" />
      </Container>

      <div className={'bg-zinc-100 py-10 sm:py-14'}>
        <Container>
          <ProductWithBestDeals className="navSlider" />
          <NewProduct className="mb-8 lg:mb-12" />
          <BannerGrid data={gridHero} grid={1} className="mb-8 lg:mb-12" />
          <Listingtabs />
          <BannerGrid data={gridHero2} grid={3} className="mb-8 lg:mb-12" />
          <PopularProduct className="" />
          <Posts />
        </Container>
      </div>
    </>
  )
}

export default HomePage
