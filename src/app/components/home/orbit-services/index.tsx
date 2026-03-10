'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'

const FaceIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='w-6 h-6 md:w-7 md:h-7' fill='currentColor'>
        <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'/>
    </svg>
)
const HairIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' className='w-6 h-6 md:w-7 md:h-7' fill='currentColor'>
        <path d='M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7l0-133.7c0-17.7 14.3-32 32-32s32 14.3 32 32l0 133.7 32.4-35.3c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM416 232c0-17.7 14.3-32 32-32s32 14.3 32 32l0 133.7 32.4-35.3c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96C465.5 476.2 457 480 448 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L416 365.7l0-133.7zM288 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64zM176 128c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80h8c8.8 0 16 7.2 16 16s-7.2 16-16 16h-8c-26.5 0-48 21.5-48 48zM352 48c8.8 0 16 7.2 16 16l0 16c26.5 0 48 21.5 48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.5-21.5-48-48-48l0-16c0-8.8 7.2-16 16-16z'/>
    </svg>
)
const OilIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' className='w-5 h-5 md:w-6 md:h-6' fill='currentColor'>
        <path d='M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z'/>
    </svg>
)
const WellnessIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='w-5 h-5 md:w-6 md:h-6' fill='currentColor'>
        <path d='M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l448 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C465.3 319.2 448 273.8 448 226.8l0-18.8c0-77.4-55-142-128-156.8L320 32c0-17.7-14.3-32-32-32l-64 0zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z'/>
    </svg>
)
const GiftIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='w-5 h-5 md:w-6 md:h-6' fill='currentColor'>
        <path d='M190.5 68.8L225.3 128l-94.1 0C101.7 128 80 106.3 80 76.8C80 56.6 96.6 40 116.8 40c27.4 0 52.3 11.6 73.7 28.8zM## 128l54.1 0 34.8-59.2C342.7 51.6 367.5 40 395.2 40C415.4 40 432 56.6 432 76.8c0 29.5-21.7 51.2-51.2 51.2l-94.1 0 34.8 59.2zM0 224l0 192c0 35.3 28.7 64 64 64l160 0 0-256L32 224c-17.7 0-32 14.3-32 32zm288 256l160 0c35.3 0 64-28.7 64-64l0-192c0-17.7-14.3-32-32-32l-192 0 0 256zm-64-352l0-80.5C224 52.8 199.2 22.8 163.2 8.2C145.5 1.4 126.4 0 116.8 0C74 0 40 34 40 76.8C40 107.9 54.3 136 80 153.5l0 6.5L32 160c-17.7 0-32 14.3-32 32l0 32 224 0 0-32 0-32zm64 0l0-32 0-32.5c25.7-17.5 40-45.6 40-76.8C432 34 398 0 355.2 0c-9.6 0-28.7 1.4-46.4 8.2C272.8 22.8 248 52.8 248 91.5l0 80.5 224 0 0-32c0-17.7-14.3-32-32-32l-88 0z'/>
    </svg>
)

const services = [
    {
        titleKey: 'innovation.brandStrategy',
        icon: FaceIcon,
        bullets: [
            'Sérum à l\'ambre pour un teint lumineux et unifié.',
            'Crème hydratante enrichie en acide succinique naturel.',
            'Masque purifiant aux extraits d\'ambre de la Baltique.',
        ],
    },
    {
        titleKey: 'innovation.digitalMarketing',
        icon: HairIcon,
        bullets: [
            'Huile capillaire nourrissante pour des cheveux brillants.',
            'Masque réparateur intensif à l\'ambre et au karité.',
            'Sérum pointes sèches pour une chevelure soyeuse.',
        ],
    },
    {
        titleKey: 'innovation.uiuxDesign',
        icon: OilIcon,
        bullets: [
            'Huile sèche corps à l\'ambre pour une peau satinée.',
            'Élixir visage anti-âge aux propriétés régénérantes.',
            'Huile de bain relaxante aux notes boisées d\'ambre.',
        ],
    },
    {
        titleKey: 'innovation.analyticsReporting',
        icon: WellnessIcon,
        bullets: [
            'Bougie parfumée à l\'ambre pour une atmosphère apaisante.',
            'Brume d\'oreiller aux essences naturelles d\'ambre.',
            'Coffret rituel bien-être pour un moment de sérénité.',
        ],
    },
    {
        titleKey: 'innovation.webDevelopment',
        icon: GiftIcon,
        bullets: [
            'Coffret découverte avec nos 5 best-sellers miniatures.',
            'Coffret prestige : soin visage, corps et cheveux complet.',
            'Coffret personnalisable selon le type de peau.',
        ],
    },
]

const RADIUS = 200
const ICON_COUNT = services.length
const ANGLE_STEP_DEG = 360 / ICON_COUNT

function getIconPosition(index: number) {
    const angleDeg = ANGLE_STEP_DEG * index
    const angleRad = (angleDeg * Math.PI) / 180
    return {
        left: `calc(50% + ${RADIUS * Math.cos(angleRad)}px)`,
        top: `calc(50% + ${RADIUS * Math.sin(angleRad)}px)`,
    }
}

function OrbitServices() {
    const t = useTranslations('api')
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const [activeIndex, setActiveIndex] = useState(0)

    const circleRotation = -(activeIndex * ANGLE_STEP_DEG)
    const iconCounterRotation = -circleRotation

    const activeService = services[activeIndex]

    return (
        <section>
            <div ref={ref} className='py-16 2xl:py-24'>
                <div className='container'>
                    <div className='w-full relative gap-8 xl:gap-24 flex md:flex-row flex-col items-center max-w-[1500px] mx-auto min-h-[450px]'>

                        <svg
                            aria-hidden='true'
                            className='pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]'>
                            <defs>
                                <pattern id='orbit-pattern' width='16' height='16' patternUnits='userSpaceOnUse' patternContentUnits='userSpaceOnUse' x='0' y='0'>
                                    <circle cx='1' cy='1' r='1' fill='#ffffff8d' />
                                </pattern>
                            </defs>
                            <rect width='100%' height='100%' strokeWidth='0' fill='url(#orbit-pattern)' />
                        </svg>

                        <div className='hidden xl:flex items-center justify-center shrink-0' style={{ width: 520, height: 520 }}>
                            <div className='relative flex items-center justify-center' style={{ width: 420, height: 420 }}>

                                <div
                                    className='absolute flex items-center justify-center w-96 h-96 blur-md'
                                    style={{
                                        opacity: 0.2,
                                        zIndex: 0,
                                        transition: 'transform 1s ease-in-out',
                                        transform: `scale(2, 1.3) rotate(${circleRotation}deg)`,
                                        transformOrigin: '50% 50% 0px',
                                    }}>
                                    <div className='absolute h-full w-full rounded-full border-2 border-dashed border-gray-500'>
                                        <div className='absolute inset-0 flex items-center justify-center'>
                                            {services.map((service, index) => {
                                                const pos = getIconPosition(index)
                                                const IconComp = service.icon
                                                return (
                                                    <div
                                                        key={`blur-${index}`}
                                                        className='absolute flex items-center justify-center w-16 h-16 ring-1 bg-purple_blue/40 ring-purple_blue/20 rounded-full shadow-md'
                                                        style={{ left: pos.left, top: pos.top, transform: 'translate(-50%, -50%)', transition: 'all 1s ease-out' }}>
                                                        <div className='flex justify-center items-center w-full h-full' style={{ transform: `rotate(${iconCounterRotation}deg)` }}>
                                                            <IconComp />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className='relative flex items-center justify-center w-96 h-96 z-10'
                                    style={{
                                        transition: 'transform 1s ease-in-out',
                                        transformOrigin: '50% 50% 0px',
                                        transform: `rotate(${circleRotation}deg)`,
                                    }}>
                                    <div className='absolute h-full w-full rounded-full border-2 border-dashed border-gray-500 dark:border-gray-600'>
                                        <div className='absolute inset-0 flex items-center justify-center'>
                                            {services.map((service, index) => {
                                                const pos = getIconPosition(index)
                                                const isActive = index === activeIndex
                                                const IconComp = service.icon
                                                return (
                                                    <div
                                                        key={`main-${index}`}
                                                        onClick={() => setActiveIndex(index)}
                                                        className={`absolute flex items-center justify-center w-16 h-16 ring-1 rounded-full shadow-md z-30 cursor-pointer transition-colors duration-300 ${isActive
                                                            ? 'bg-purple_blue ring-purple_blue/50'
                                                            : 'bg-purple_blue/40 ring-purple_blue/20 hover:bg-purple_blue/60'
                                                            }`}
                                                        style={{ left: pos.left, top: pos.top, transform: 'translate(-50%, -50%)', transition: 'all 1s ease-out' }}>
                                                        {isActive && (
                                                            <div className='animate-ping absolute flex items-center z-10 justify-center w-16 h-16 bg-purple_blue rounded-full opacity-70' />
                                                        )}
                                                        <div
                                                            className='flex justify-center items-center w-full h-full text-white cursor-pointer'
                                                            style={{ transition: 'transform 1s ease-in-out', transform: `rotate(${iconCounterRotation}deg)` }}>
                                                            <IconComp />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className='absolute flex items-center justify-center'
                                    style={{ filter: 'blur(8px)', opacity: 0.2, zIndex: 0, transform: 'scale(2, 1.3)', transformOrigin: '50% 50% 0' }}>
                                    <Image src='/images/logo/logo.png' alt='logo' width={200} height={200} quality={100} />
                                </div>
                                <div className='absolute flex items-center justify-center z-20'>
                                    <Image src='/images/logo/logo.png' alt='logo' width={200} height={200} quality={100} />
                                </div>
                            </div>
                        </div>

                        <div className='overflow-hidden block md:hidden'>
                            <nav>
                                <ul role='tablist' className='flex relative bg-opacity-60 p-1 flex-row bg-purple_blue/30 rounded-none border-purple_blue border-2 border-r-0 border-l-0'>
                                    {services.map((service, index) => {
                                        const isActive = index === activeIndex
                                        const IconComp = service.icon
                                        return (
                                            <li
                                                key={index}
                                                role='tab'
                                                onClick={() => setActiveIndex(index)}
                                                className='text-center w-full h-full relative bg-transparent py-3 px-2 select-none cursor-pointer flex justify-center items-center'>
                                                <div className='z-20 text-inherit'>
                                                    <div className={`flex items-center h-12 justify-center ${isActive ? 'text-purple_blue' : 'text-white'}`}>
                                                        <IconComp />
                                                    </div>
                                                </div>
                                                {isActive && (
                                                    <motion.div
                                                        layoutId='mobile-tab'
                                                        className='absolute inset-0 z-10 h-full bg-white rounded-md shadow'
                                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                                    />
                                                )}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>

                        <div className='md:flex xl:hidden w-full md:w-32 h-fit bg-purple_blue/30 hidden justify-center items-center backdrop-blur-md border-purple_blue border-2 border-r-0 border-l-0 md:border-r-2 md:rounded-r-3xl py-8 sm:py-10 z-40 shadow-xl shadow-purple_blue/25'>
                            <div className='md:flex hidden w-fit relative md:flex-col gap-10 items-center justify-center'>
                                {services.map((service, index) => {
                                    const isActive = index === activeIndex
                                    const IconComp = service.icon
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                            className={`flex items-center justify-center w-16 h-16 ring-1 rounded-full shadow-md hover:scale-110 transition-all duration-300 cursor-pointer ${isActive ? 'bg-purple_blue ring-purple_blue/50' : 'bg-purple_blue/40 ring-purple_blue/20 hover:bg-purple_blue'
                                                }`}>
                                            {isActive && (
                                                <div className='animate-ping absolute flex items-center z-10 justify-center w-16 h-16 bg-purple_blue rounded-full opacity-70' />
                                            )}
                                            <div className='flex justify-center items-center w-full h-full text-white cursor-pointer'>
                                                <IconComp />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className='flex flex-col md:pl-10 xl:pl-0 items-center xl:items-start justify-center w-full'>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeIndex}
                                    className='w-full'
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -15 }}
                                    transition={{ duration: 0.4 }}>

                                    <div className='px-5 md:px-0'>
                                        <h3 className='font-semibold dark:text-white'>
                                            {t(activeService.titleKey).replace('\\n', ' ')}
                                        </h3>
                                    </div>

                                    <div className='mt-8 min-h-52'>
                                        <div className='flex flex-col gap-5'>
                                            {activeService.bullets.map((bullet, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 40 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 + i * 0.12 }}>
                                                    <span className='px-5 md:pr-10 lg:pr-20 flex flex-col text-sm font-semibold gap-6'>
                                                        <span className='relative w-fit overflow-hidden'>
                                                            <span className='dark:text-white/80'>{bullet}</span>
                                                            <motion.span
                                                                className='absolute bg-purple_blue/40'
                                                                style={{ inset: '4px 0px 4px 100%', zIndex: 20 }}
                                                                initial={{ left: '0%' }}
                                                                animate={{ left: '100%' }}
                                                                transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                                                            />
                                                        </span>
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrbitServices
