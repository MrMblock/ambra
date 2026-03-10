'use client'
import { ThemeProvider } from 'next-themes'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer/Footer'
import ScrollToTop from '../components/scroll-to-top'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      enableSystem={false}
      defaultTheme='light'>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}
