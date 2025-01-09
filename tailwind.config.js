/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: 'class',
  content: ['./components/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    extend: {
      boxShadow: {
        card: '0px 0px 6px rgba(79, 95, 120, 0.1)',
        cardHover: '0px 0px 8px rgba(79, 95, 120, 0.18)',
        category: '0px 1px 6px rgba(79, 95, 120, 0.12)',
        category2: '0px 10px 20px rgba(88, 110, 125, 0.1)',
        navigation: '0 0 10px rgba(79, 95, 120, 0.3)',
        quickview: '0 3px 6px 1px rgba(0,0,0,.2)',
        featured: '0px 4px 8px rgba(70, 84, 111, 0.06)',
        cart: '0 3px 6px rgba(0,0,0,0.12)',
        switch: '0 2px 5px rgba(21,35,49,0.4)',
        dropDown: '0px 10px 40px rgba(41, 50, 68, 0.15)',
        carouselButton: '0px 2px 15px rgba(115, 125, 144, 0.25)',
        listProduct: '0 2px 4px rgba(0,0,0,.08)',
        navigationReverse: '0 -3px 6px rgba(0, 0, 0, 0.16)',
        header: '0 2px 3px rgba(0, 0, 0, 0.08)',
        subMenu: '1px 2px 3px rgba(0, 0, 0, 0.08)',
        bottomNavigation: '0 -2px 3px rgba(0, 0, 0, 0.06)',
        cookies: '0 -2px 3px rgba(0, 0, 0, 0.04)',
        contact: '0 1px 10px rgba(75, 90, 130, 0.1)',
        vendorCard: '0px 2px 3px rgba(0, 0, 0, 0.06)',
        vendorCardHover: '0px 1px 15px rgba(0, 0, 0, 0.06)',
        vendorSidebar:
          '0px 1px 2px rgba(0, 0, 0, 0.03), 0px 1px 3px rgba(0, 0, 0, 0.05)',
        searchBox: '0px 4px 4px rgba(99, 113, 134, 0.1)',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
