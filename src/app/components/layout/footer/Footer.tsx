'use client'
import React from 'react'
import Logo from '../header/Logo'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer')

  return (
    <footer className='xl:pt-20 pb-6'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row py-16 gap-10 justify-between border-b border-dark_black/10 dark:border-white/10'>
          <div className='flex flex-col gap-6 max-w-md'>
            <Logo />
            <p className='opacity-60'>{t('tagline')}</p>
          </div>
          <div className='grid sm:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>{t('sitemap')}</p>
              <ul className='flex flex-col gap-3'>
                {[
                  { name: t('aboutUs'), url: '#lamarque' },
                  { name: t('work'), url: '#produits' },
                  { name: t('services'), url: '#conseils' },
                  { name: t('contactUs'), url: '#contact' },
                ].map((item, index) => {
                  return (
                    <li
                      key={index}
                      className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                      <a href={item.url}>{item.name}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>{t('contactDetails')}</p>
              <p className='text-dark_black/60 dark:text-white/60'>
                Paris, France
              </p>
              <p className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                <a href='mailto:contact@ambra.fr'>
                  contact@ambra.fr
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <p className='text-dark_black/60 dark:text-white/60'>
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
