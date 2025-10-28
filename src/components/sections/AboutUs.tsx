import { motion } from 'motion/react'
import LazyImage from '../ui/LazyImage'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function AboutUs() {


    return (
        <>
            <section className='flex flex-col w-full md:hidden' about='mobile view'>
                <LazyImage src='3.JPG' className='h-[380px]' playAnimatiom={true} />

                <motion.div
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1, }}
                    className='py-6 px-5 flex flex-col gap-3'
                >
                    <h1 className='font-bold text-3xl text-left text-[var(--wst-button-color-text-primary)]'>עלינו</h1>
                    <p className='text-left'>
                        הכניסו לעולם של היופי שבך, שם המומחיה נפגשת עם האלגנטיות. הסטודיו שלנו מוקדש לספק שירותי ציפורניים ואיפור איכותיים שמשפרים את היופי הטבעי שלך. עם דגש על דיוק ואומנות, אנו שואפים להגדיר מחדש את הציפורניים ולספק חווית יוקרה ומעצימה לכל לקוח.
                    </p>
                    <LazyImage src='4.JPG' className='h-[200px] mt-2' playAnimatiom={true} />
                </motion.div>
            </section>
            <ParallaxProvider>
                {/* TODO: fix this Paralla */}
                <section about='desktop view' className='hidden md:flex w-full h-full justify-between mt-3'>
                    <Parallax speed={-10}>
                        <LazyImage src='3.JPG' className='h-[400px] lg:w-2/5' playAnimatiom={true} />
                    </Parallax>
                    <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1, }}
                        className=' ps-5 flex flex-col gap-3 lg:w-2/6'
                    >
                        <LazyImage src='4.JPG' className='h-[200px]' playAnimatiom={true} />
                        <h1 className='font-bold text-5xl text-left text-[var(--wst-button-color-text-primary)]'>עלינו</h1>
                        <p className='text-left'>
                            הכניסו לעולם של היופי שבך, שם המומחיה נפגשת עם האלגנטיות. הסטודיו שלנו מוקדש לספק שירותי ציפורניים ואיפור איכותיים שמשפרים את היופי הטבעי שלך. עם דגש על דיוק ואומנות, אנו שואפים להגדיר מחדש את הציפורניים ולספק חווית יוקרה ומעצימה לכל לקוח.
                        </p>
                    </motion.div>
                </section>
            </ParallaxProvider>
        </>
    )
}
