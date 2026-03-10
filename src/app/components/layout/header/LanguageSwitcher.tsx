'use client'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'

const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'fr' : 'en'
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <button
      onClick={toggleLocale}
      className='flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-dark_black/10 dark:border-white/20 hover:bg-dark_black/5 dark:hover:bg-white/10 transition-colors text-sm font-medium cursor-pointer'
      aria-label={locale === 'en' ? 'Passer en français' : 'Switch to English'}
    >
      <span className={locale === 'en' ? 'opacity-100' : 'opacity-40'}>EN</span>
      <span className='opacity-30'>|</span>
      <span className={locale === 'fr' ? 'opacity-100' : 'opacity-40'}>FR</span>
    </button>
  )
}

export default LanguageSwitcher
