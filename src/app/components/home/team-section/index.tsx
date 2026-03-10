'use client'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

interface TimelineItem {
    title: string
    subtitle: string
    side: 'left' | 'right'
}

interface TeamMember {
    name: string
    role: string
    image: string
    timeline: TimelineItem[]
    finalLabel: string
}

const teamMembers: TeamMember[] = [
    {
        name: 'Gabriel Saint-Louis',
        role: 'Cofondateur',
        image: '/images/home/creative/creative_img_1.png',
        timeline: [
            { title: 'Bachelor 3 IA, Fullstack, devOps', subtitle: 'IPSSI', side: 'left' },
            { title: 'Master Dev. Manager Full Stack', subtitle: 'EFREI', side: 'right' },
            { title: 'Développeur Freelance', subtitle: 'Expérience terrain', side: 'left' },
        ],
        finalLabel: 'AMBRA.',
    },
    {
        name: 'Ambre Savary',
        role: 'Cofondatrice',
        image: '/images/home/creative/creative_img_2.png',
        timeline: [
            { title: 'BTS Communication', subtitle: 'Digital School of Paris', side: 'left' },
            { title: 'Bachelor 3 Marketing Digital', subtitle: 'Digital School of Paris', side: 'right' },
            { title: 'Community Manager', subtitle: 'David Abitbol', side: 'left' },
        ],
        finalLabel: 'AMBRA.',
    },
]

function TeamSection() {
    const t = useTranslations('teamSection')
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const [activeIndex, setActiveIndex] = useState(0)
    const activeMember = teamMembers[activeIndex]

    const fadeUp = (delay: number = 0) => ({
        initial: { y: 30, opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 },
        transition: { duration: 0.5, delay },
    })

    return (
        <section>
            <div ref={ref} className="2xl:py-20 py-11">
                <div className="container">
                    <div className="flex flex-col gap-8 w-full max-w-[1500px] mx-auto">
                        <motion.h2 {...fadeUp(0)} className="font-semibold mb-0">
                            {t('title')}
                        </motion.h2>

                        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div
                                {...fadeUp(0.2)}
                                className="flex h-[350px] sm:h-[400px] md:h-[500px] lg:h-[560px] w-full items-center justify-center"
                            >
                                <ul className="w-full flex flex-row gap-3 h-full">
                                    {teamMembers.map((member, index) => {
                                        const isActive = index === activeIndex
                                        return (
                                            <li
                                                key={index}
                                                aria-current={isActive ? 'true' : 'false'}
                                                onClick={() => setActiveIndex(index)}
                                                className={`
                          relative cursor-pointer overflow-hidden rounded-3xl
                          transition-all duration-500 ease-in-out
                          ${isActive
                                                        ? 'w-[70%] shadow-xl shadow-purple_blue/40'
                                                        : 'w-[30%] hover:w-[40%] shadow-lg shadow-purple_blue/20 hover:shadow-xl hover:shadow-purple_blue/50'
                                                    }
                        `}
                                            >
                                                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                                                    <div
                                                        className={`
                              absolute inset-0 z-10 bg-purple_blue/30 mix-blend-overlay
                              transition-opacity duration-500
                              ${isActive ? 'opacity-0' : 'opacity-40 hover:opacity-0'}
                            `}
                                                    />
                                                    <Image
                                                        alt={member.name}
                                                        src={member.image}
                                                        fill
                                                        className={`
                              object-cover transition-all duration-500
                              ${isActive ? 'grayscale-0 scale-105' : 'grayscale'}
                            `}
                                                        sizes="(max-width: 768px) 100vw, 50vw"
                                                    />
                                                    <div
                                                        className={`
                              absolute bottom-0 left-0 right-0 p-5 z-20
                              bg-gradient-to-t from-black/60 to-transparent
                              transition-all duration-300
                              ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                            `}
                                                    >
                                                        <p className="text-sm uppercase font-semibold text-purple/80 tracking-wider">
                                                            {member.role}
                                                        </p>
                                                        <p className="text-lg font-bold text-white">
                                                            {member.name}
                                                        </p>
                                                    </div>
                                                    <div
                                                        className={`
                              absolute bottom-4 left-4 z-20
                              transition-all duration-300
                              ${isActive ? 'opacity-0' : 'opacity-80'}
                            `}
                                                    >
                                                        <p className="text-xs uppercase font-semibold text-white/80 tracking-wider">
                                                            {member.role}
                                                        </p>
                                                        <p className="text-sm font-bold text-white">
                                                            {member.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </motion.div>

                            <motion.div
                                {...fadeUp(0.4)}
                                className="w-full flex flex-col gap-6 items-center pt-5 h-full"
                            >
                                <div className="w-full flex flex-col justify-center items-center">
                                    <motion.h2
                                        key={activeMember.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {activeMember.name}
                                    </motion.h2>
                                    <p className="text-dark_black/60 dark:text-white/60 mt-1">
                                        {activeMember.role}
                                    </p>
                                </div>

                                <div className="w-full h-full flex items-center justify-center">
                                    <motion.ul
                                        key={activeIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-col items-center gap-0"
                                    >
                                        {activeMember.timeline.map((item, i) => (
                                            <li key={i} className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-3">
                                                <div className={`${item.side === 'left' ? '' : 'invisible'} text-right`}>
                                                    <motion.p
                                                        initial={{ opacity: 0, x: -15 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.4, delay: 0.1 + i * 0.15 }}
                                                        className="text-base font-medium text-dark_black dark:text-white"
                                                    >
                                                        {item.title}
                                                    </motion.p>
                                                </div>

                                                <div className="flex flex-col items-center">
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ duration: 0.3, delay: 0.1 + i * 0.15 }}
                                                        className="w-4 h-4 rounded-full border-2 border-purple bg-purple_blue"
                                                    />
                                                    {i < activeMember.timeline.length - 1 && (
                                                        <div className="w-0.5 h-14 bg-dark_black/10 dark:bg-white/10" />
                                                    )}
                                                    {i === activeMember.timeline.length - 1 && (
                                                        <div className="w-0.5 h-8 bg-dark_black/10 dark:bg-white/10" />
                                                    )}
                                                </div>

                                                <div className={`${item.side === 'right' ? '' : 'invisible'} text-left`}>
                                                    <motion.p
                                                        initial={{ opacity: 0, x: 15 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.4, delay: 0.1 + i * 0.15 }}
                                                        className="text-base font-medium text-dark_black dark:text-white"
                                                    >
                                                        {item.title}
                                                    </motion.p>
                                                </div>

                                                {item.side === 'left' ? (
                                                    <>
                                                        <div className="col-start-1 text-right pb-6">
                                                            <motion.p
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ duration: 0.3, delay: 0.2 + i * 0.15 }}
                                                                className="text-sm text-dark_black/50 dark:text-white/50"
                                                            >
                                                                {item.subtitle}
                                                            </motion.p>
                                                        </div>
                                                        <div className="col-start-2" />
                                                        <div className="col-start-3" />
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="col-start-1" />
                                                        <div className="col-start-2" />
                                                        <div className="col-start-3 text-left pb-6">
                                                            <motion.p
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ duration: 0.3, delay: 0.2 + i * 0.15 }}
                                                                className="text-sm text-dark_black/50 dark:text-white/50"
                                                            >
                                                                {item.subtitle}
                                                            </motion.p>
                                                        </div>
                                                    </>
                                                )}
                                            </li>
                                        ))}

                                        <li className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-3">
                                            <div />
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.3, delay: 0.5 }}
                                                className="w-4 h-4 rounded-full border-2 border-purple bg-purple_blue"
                                            />
                                            <motion.p
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.55 }}
                                                className="text-base font-bold text-dark_black dark:text-white"
                                            >
                                                {activeMember.finalLabel}
                                            </motion.p>
                                        </li>
                                    </motion.ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection
