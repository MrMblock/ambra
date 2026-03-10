'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

function CustomerStories() {
  const t = useTranslations('customerStories')
  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center gap-10 md:gap-20'>
            <div className='mx-auto max-w-2xl flex items-center text-center'>
              <h2>
                {t('title')}
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  {t('titleItalic')}
                </span>
              </h2>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                <div className="p-8 gap-64 rounded-2xl flex flex-col relative bg-[url('/images/home/customerStories/customer_bg_img.jpg')] object-cover bg-center h-full w-full bg-cover bg-no-repeat">
                  <span className='text-white/60 uppercase text-sm font-medium'>
                    {t('label')}
                  </span>
                  <div className='flex flex-col gap-6 '>
                    <h4 className='text-white'>
                      {t('quote1')}
                    </h4>
                    <div className='flex flex-col gap-1'>
                      <p className='text-white font-medium'>{t('author1')}</p>
                      <p className='text-white/60 text-sm font-medium'>
                        {t('role1')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-between gap-36 xl:max-w-25 bg-pale-yellow rounded-2xl p-8'>
                  <div>
                    <span className='uppercase text-sm font-medium text-dark_black/60'>
                      {t('factsNumbers')}
                    </span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h2 className='text-7xl font-medium dark:text-dark_black'>
                      {t('percentage')}
                    </h2>
                    <h4 className='dark:text-dark_black'>
                      {t('recommend')}
                    </h4>
                  </div>
                </div>
              </div>
              <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                <div className='flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-white/60 uppercase text-sm font-medium'>
                      {t('label')}
                    </span>
                    <h4 className='text-white'>
                      {t('quote2')}
                    </h4>
                    <div>
                      <Image
                        src='/images/home/customerStories/creativity_img.jpg'
                        alt='image'
                        width={344}
                        height={220}
                        className='w-full h-52'
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-24 justify-between bg-dark_black/5 dark:bg-white/5 p-8 rounded-2xl'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-dark_black/60 dark:text-white/60 uppercase text-sm font-medium'>
                      {t('label')}
                    </span>
                    <h2 className='text-2xl lg:text-5xl'>
                      {t('quote3')}
                    </h2>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='font-medium'>{t('author1')}</p>
                    <p className='text-dark_black/60 dark:text-white/60 text-sm font-medium'>
                      {t('role1')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories
