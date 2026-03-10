'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

function OnlinePresence() {
  const t = useTranslations('onlinePresence')
  const [onlinePresenceList, setonlinePresenceList] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setonlinePresenceList(data?.onlinePresenceList)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='max-w-2xl text-center'>
              <h2>
                {t('title')}
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  {t('titleItalic')}
                </span>
              </h2>
            </div>
            <div className='grid md:grid-cols-2 gap-x-6 gap-y-8'>
              {onlinePresenceList?.map((items: any, index: any) => (
                <div
                  key={index}
                  className='group flex flex-col gap-6'>
                  <div className='relative overflow-hidden rounded-2xl'>
                    <Image
                      src={items.image}
                      alt={items.title}
                      width={625}
                      height={410}
                      className='rounded-2xl transition-transform duration-500 group-hover:scale-105'
                      unoptimized={true}
                    />
                  </div>
                  <div className='flex flex-col items-start gap-4'>
                    <h5>{items.title}</h5>
                    <div className='flex gap-3 flex-wrap'>
                      {items.tag?.map((tag: any, tIndex: number) => (
                        <p
                          key={tIndex}
                          className='text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full'>
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlinePresence
