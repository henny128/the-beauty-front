import LazyImage from '../ui/LazyImage'
import FadeUp from '../ui/FadeUp'

export default function AboutUs() {
    return (
        <>
            <section className='flex flex-col w-full md:hidden' about='mobile view'>
                <LazyImage src='girl.png' classesContainer='h-[23.75rem]' playAnimatiom={true} />

                <FadeUp className='py-6 px-5 flex flex-col gap-3 text-left word-space'>
                    <>
                        <h1 className='font-medium text-3xl'>עלינו</h1>
                        <p>
                            הכניסו לעולם של היופי שבך, שם המומחיה נפגשת עם האלגנטיות. הסטודיו שלנו מוקדש לספק שירותי ציפורניים ואיפור איכותיים שמשפרים את היופי הטבעי שלך. עם דגש על דיוק ואומנות, אנו שואפים להגדיר מחדש את הציפורניים ולספק חווית יוקרה ומעצימה לכל לקוח.
                        </p>
                        <LazyImage src='/girl.png' classesContainer='h-[12.5rem] mt-2' playAnimatiom={true} />
                    </>
                </FadeUp>
            </section>
            <section about='desktop view' className='hidden md:flex w-full justify-between mt-9 xl:mt-5'>
                <div className="relative top-0 h-[34.375rem] lg:h-full w-1/2 bg-[url(girl.png)] bg-[size:25rem_100dvh] lg:bg-[size:43.75rem_100dvh] bg-[position:right_center] bg-no-repeat bg-fixed">
                </div>

                <FadeUp className='ps-5 flex flex-col gap-3 w-1/4'>
                    <>
                        <LazyImage src='pink.png' classesContainer='h-[12.5rem] lg:h-[25rem]' playAnimatiom={true} />
                        <div className='p-2 lg:p-6 flex flex-col gap-4'>

                            <h1 className='font-medium text-5xl lg:text-5xl text-left text-[var(--wst-button-color-text-primary)]'>עלינו</h1>
                            <p className='text-left text-sm lg:text-base'>
                                הכניסו לעולם של היופי שבך, שם המומחיה נפגשת עם האלגנטיות. הסטודיו שלנו מוקדש לספק שירותי ציפורניים ואיפור איכותיים שמשפרים את היופי הטבעי שלך. עם דגש על דיוק ואומנות, אנו שואפים להגדיר מחדש את הציפורניים ולספק חווית יוקרה ומעצימה לכל לקוח.
                            </p>
                        </div>
                    </>
                </FadeUp>

            </section >

        </>
    )
}
