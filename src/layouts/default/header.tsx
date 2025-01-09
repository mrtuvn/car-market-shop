import Logo from '../../components/ui/logo'
import Container from '../../components/ui/container'
import FormSearch from '../../components/formSearch'

import CartButton from '../../components/cart/cart-button'
import HeaderMenutop from '../../components/header/menutop'
import { MyAccount } from '../../components/header/myAccount'
import MainMenu from '../../components/header/mainMenu'
import { siteSettings } from '../../settings/site-settings'

const Header = () => {
  return (
    <header className="sticky z-40 w-full bg-white/75 backdrop-blur-sm md:top-0">
      <div className="top-bar text-fill-base border-b border-black/10 text-sm">
        <Container>
          <div className="flex h-11 w-full items-center justify-between text-sm">
            <p className="hidden truncate md:block">Store Location: {siteSettings?.location}</p>
            <HeaderMenutop />
          </div>
        </Container>
      </div>
      <div className="border-b border-black/10">
        <Container>
          <div className="flex h-20 w-full items-center justify-between py-4">
            <Logo />
            <FormSearch />
            <div className="text-brand-icon-header flex space-x-5 text-sm lg:max-w-[33%] xl:space-x-10">
              <MyAccount />
              <CartButton />
            </div>
          </div>
        </Container>
      </div>
      <div className="navbar border-b border-black/10">
        <Container>
          <MainMenu />
        </Container>
      </div>
    </header>
  )
}

export default Header
