'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import OrbitServices from '../orbit-services'

function Innovation() {
  const t = useTranslations('innovation')
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = (index: any) => ({
    initial: { y: '25%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '25%', opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  })
  return (
    <section id='produits'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col justify-center items-center gap-10 lg:gap-16'>
              <motion.div
                {...bottomAnimation(1)}
                className='max-w-(--breakpoint-Xsm) text-center'>
                <h2>
                  {t('title')}{' '}
                  <span className='instrument-font italic font-normal dark:text-white/70'>
                    {t('titleItalic')}
                  </span>
                </h2>
              </motion.div>
              <motion.div {...bottomAnimation(2)} className='w-full'>
                <OrbitServices />
              </motion.div>
            </div>
            <motion.div
              {...bottomAnimation(3)}
              className='flex flex-col gap-4 xl:flex xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full'>
              <h4 className='text-white text-center xl:text-left'>
                {t('seeWork')}
                <br /> {t('startJourney')}
              </h4>
              <div className='flex flex-col sm:flex-row gap-3 items-center'>
                <a
                  href='#contact'
                  className='group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center lg:gap-4 py-2 pl-5 pr-2 border border-white dark:border-opacity-50 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out'>
                  <span className='group-hover:translate-x-12 transform transition-transform duration-200 ease-in-out'>
                    {t('letsCollaborate')}
                  </span>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='group-hover:-translate-x-40 transition-all duration-200 ease-in-out'>
                    <rect
                      width='32'
                      height='32'
                      rx='16'
                      fill='#1B1D1E'
                      className=' transition-colors duration-200 ease-in-out group-hover:fill-white'
                    />
                    <path
                      d='M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668'
                      stroke='white'
                      strokeWidth='1.42857'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='group-hover:stroke-black'
                    />
                  </svg>
                </a>
                <a
                  href='#lamarque'
                  className='group border border-white dark:border-white/50 text-white font-medium bg-dark_black gap-2 rounded-full flex items-center justify-between lg:gap-4 py-2 pl-5 pr-2 hover:opacity-95 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out'>
                  <span className='group-hover:translate-x-12 transform transition-transform duration-200 ease-in-out'>
                    {t('viewPortfolio')}
                  </span>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='group-hover:-translate-x-36 transition-all duration-200 ease-in-out '>
                    <rect width='32' height='32' rx='16' fill='white' />
                    <path
                      d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                      stroke='#1B1D1E'
                      strokeWidth='1.42857'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovation
