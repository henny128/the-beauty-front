import Button from '../ui/Button'
import LazyImage from '../ui/LazyImage'
import FadeLeft from '../ui/FadeLeft'
import FadeUp from '../ui/FadeUp'

export default function Logo() {
    return (
        <>
            <section className=' w-full md:hidden overflow-hidden' about='phone view'>
                <div className='py-9 pl-2'>
                    <FadeLeft className='text-left text-8xl font-semibold text-[var(--wst-button-color-text-primary)]'>
                        <> אורך, נפח, וסטייל!</>
                    </FadeLeft>
                </div>
                <div className='h-[420px] w-full bg-[var(--wst-button-color-text-primary)]'>
                    <LazyImage classesContainer='h-full w-full' src="/girl-2.avif" playAnimatiom={true} />
                </div>

                <FadeUp className='py-6 px-3 flex flex-col gap-6 word-space'>
                    <>
                        <p className='text-left'>
                            היופי שבך (בעברית) התמחה בטיפולים מתקדמים לציפורניים, עיצוב ציפורניים, טיפולי פנים ואיפור בסטודיו מודרני ומרהיב. השילוב של מוצרים איכותיים ומקצוענות מוביל לתוצאות מרשימות ומרשימות, והפך את היופי שבך ליעד חובה לכל אישה שמעוניינת במראה מושלם וטיפוח מושלם.
                        </p>
                        <Button to='our-services' classes='ms-auto'>לקביעת תור</Button>
                    </>
                </FadeUp>
            </section>
            <section className='hidden md:grid w-full grid-cols-[200px_1fr_200px]  xl:grid-cols-[300px_1fr_200px] grid-rows-[600px_320px] xl:grid-rows-[1fr_250px] overflow-hidden' about='computer view'>
                <div className='row-span-2 h-[85%] w-full bg-[var(--wst-button-color-text-primary)]'>
                    <LazyImage classesContainer='h-full w-full' classesImage='object-cover!' src='/girl.png' playAnimatiom={true} />
                </div>
                <div className='col-span-2 p-5 my-auto '>
                    <FadeLeft className='text-left md:text-[100px] xl:text-[200px] font-semibold text-[var(--wst-button-color-text-primary)]'
                    >
                        <>
                            אורך, נפח, וסטייל!
                        </>
                    </FadeLeft>
                </div>

                <FadeUp className='col-span-2 py-6 flex flex-row-reverse gap-6 word-space'>
                    <>
                        <p className='w-[250px] xl:w-[350px]'>
                            היופי שבך (בעברית) התמחה בטיפולים מתקדמים לציפורניים, עיצוב ציפורניים, טיפולי פנים ואיפור בסטודיו מודרני ומרהיב. השילוב של מוצרים איכותיים ומקצוענות מוביל לתוצאות מרשימות ומרשימות, והפך את היופי שבך ליעד חובה לכל אישה שמעוניינת במראה מושלם וטיפוח מושלם.
                        </p>
                        <Button to='our-services' classes='mx-auto mb-auto'>לקביעת תור</Button>
                    </>
                </FadeUp>
            </section>
        </>
    )
}
