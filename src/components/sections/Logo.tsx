import Button from '../ui/Button'
import { useSpring, animated } from '@react-spring/web'
import LazyImage from '../ui/LazyImage'

export default function Logo() {
    const titleSpring = useSpring({
        from: { x: -100 },
        to: { x: 0 },
        config: { duration: 500, delay: 100 } 
    })

    const contentSpring = useSpring({
        from: { y: 100 },
        to: { y: 0},
        config: { duration: 500, delay: 100 }
    })

    return (
        <div className='h-[850px] md:h-[800px] xl:h-[1100px] w-full'>
            <div className='h-full w-full md:hidden' about='phone view'>
                <div className='p-5'>
                    <animated.h5
                        style={titleSpring}
                        className='text-left text-8xl font-semibold text-[var(--wst-button-color-text-primary)]'
                    >
                        אורך, נפח, וסטייל!
                    </animated.h5>
                </div>
                <div className='h-[320px] w-full bg-[var(--wst-button-color-text-primary)]'>
                    {/* TODO: decide wich way to show image */}
                    <LazyImage className='h-full w-full' src="/1.JPG"/>
                    {/* <img className='h-full w-full' src="/1.JPG" alt="" /> */}
                </div>

                <animated.div
                    style={contentSpring}
                    className='py-6 px-3 flex flex-col gap-6'
                >
                    <p className='text-left text-[var(--wst-button-color-text-primary)]'>
                        היופי שבך (בעברית) התמחה בטיפולים מתקדמים לציפורניים, עיצוב ציפורניים, טיפולי פנים ואיפור בסטודיו מודרני ומרהיב. השילוב של מוצרים איכותיים ומקצוענות מוביל לתוצאות מרשימות ומרשימות, והפך את היופי שבך ליעד חובה לכל אישה שמעוניינת במראה מושלם וטיפוח מושלם.
                    </p>
                    <Button to='our-services' classes='ms-auto'>לקביעת תור</Button>
                </animated.div>
            </div>
            <div className='hidden md:grid h-full w-full grid-cols-[200px_1fr_200px]  xl:grid-cols-[300px_1fr_200px] grid-rows-[1fr_250px]' about='computer view'>
                <div className='row-span-2 h-[85%] w-full bg-[var(--wst-button-color-text-primary)]'>
                    {/* TODO: load the hole image before place it to the screen */}
                    <LazyImage className='h-full w-full 'src='/1.JPG'/>
                    {/* <img className='h-full w-full' src="/1.JPG" alt="" /> */}
                </div>
                <div className=' col-span-2 p-5 my-auto '>
                    <animated.h5
                        style={titleSpring}
                        className='text-left md:text-[100px] xl:text-[200px] font-semibold text-[var(--wst-button-color-text-primary)]'
                    >
                        אורך, נפח, וסטייל!
                    </animated.h5>
                </div>

                <animated.div
                    style={contentSpring}
                    className='col-span-2 py-6 flex flex-row-reverse gap-6'
                >
                    <p className='w-[250px] xl:w-[350px] text-[var(--wst-button-color-text-primary)]'>
                        היופי שבך (בעברית) התמחה בטיפולים מתקדמים לציפורניים, עיצוב ציפורניים, טיפולי פנים ואיפור בסטודיו מודרני ומרהיב. השילוב של מוצרים איכותיים ומקצוענות מוביל לתוצאות מרשימות ומרשימות, והפך את היופי שבך ליעד חובה לכל אישה שמעוניינת במראה מושלם וטיפוח מושלם.
                    </p>
                    <Button to='our-services' classes='mx-auto mb-auto'>לקביעת תור</Button>
                </animated.div>
            </div>
        </div>
    )
}
