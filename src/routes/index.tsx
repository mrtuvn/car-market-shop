// router.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Layout
import DefaultLayout from '../layouts/default/layout'

// Pages
import HomePage from '../pages/home'
import NoPage from '../pages/noPage'
import CategoriesPage from '../pages/categories'
import CategoriesProductPage from '../pages/category'
import ProductDetailsPage from '../pages/productDetails'
import SearchPage from '../pages/search'
import CartPage from '../pages/cart'
import CheckoutPage from '../pages/checkout'
import Dashboard from '@/pages/dashboard'
import LoginPage from '@/pages/auth/login'
import RegisterPage from '@/pages/auth/register'
import ForgotPasswordPage from '@/pages/auth/forgot-password'
import ComparePage from '@/pages/compare'
import WishlistPage from '@/pages/wishlist'
import BlogsPage from '@/pages/blogs'
import CompleteOrderPage from '@/pages/complete-order'

// Contexts
import { AppProvider } from '../contexts/AppContextProvider'

// Components
import { PrivateRoute, PublicRoute } from '../components/Routes'
import ManagedModal from '../components/common/modal/managed-modal'
import ManagedDrawer from '../components/common/drawer/managed-drawer'
import ManagedToaster from '../components/common/toaster/toaster-provider'

//React-redux
import CompareBotomPanel from '../components/compare/compare-bottomPanel'

import { Provider } from 'react-redux'
import store from '@/components/todo-redux/redux/store'
import ContactPage from '@/pages/contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppProvider>
        <DefaultLayout />
        <ManagedModal />
        <ManagedDrawer />
        <ManagedToaster />
        <CompareBotomPanel />
      </AppProvider>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
      {
        path: 'categories/:categoryName',
        element: <CategoriesProductPage />,
      },
      {
        path: 'categories/:categoryName/:slug',
        element: <ProductDetailsPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'checkout',
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <NoPage />,
      },
      {
        path: 'dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: 'login',
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: 'register',
        element: (
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        ),
      },
      {
        path: 'forgot-password',
        element: (
          <PublicRoute>
            <ForgotPasswordPage />
          </PublicRoute>
        ),
      },
      {
        path: 'compare',
        element: <ComparePage />,
      },
      {
        path: 'wishlist',
        element: (
          <PrivateRoute>
            <WishlistPage />
          </PrivateRoute>
        ),
      },

      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'blogs',
        element: <BlogsPage />,
      },
      {
        path: 'contact',
        element: (
          <Provider store={store}>
            <ContactPage />
          </Provider>
        ),
      },
      {
        path: 'complete-order',
        element: <CompleteOrderPage />,
      },
    ],
  },
])

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}
