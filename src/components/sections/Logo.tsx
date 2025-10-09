import Button from '../ui/Button'
import { useSpring, animated } from '@react-spring/web'

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
        <div className='h-[1100px] w-full'>
            <div className='h-full w-full' about='phone view'>
                <div className='p-5'>
                    <animated.h5
                        style={titleSpring}
                        className='text-left text-8xl font-semibold text-[var(--wst-button-color-text-primary)]'
                    >
                        ורך, נפח, וסטייל!
                    </animated.h5>
                </div>
                <div className='h-[320px] w-full bg-[var(--wst-button-color-text-primary)]'>
                    {/* TODO: load the hole image before place it to the screen */}
                    <img className='h-full w-full' src="/1.JPG" alt="" />
                </div>

                <animated.div
                    style={contentSpring}
                    className='py-6 px-3 flex flex-col gap-6'
                >
                    <p className='text-left text-[var(--wst-button-color-text-primary)]'>
                        היופי שבך (בעברית) התמחה בטיפולים מתקדמים לציפורניים, עיצוב ציפורניים, טיפולי פנים ואיפור בסטודיו מודרני ומרהיב. השילוב של מוצרים איכותיים ומקצוענות מוביל לתוצאות מרשימות ומרשימות, והפך את היופי שבך ליעד חובה לכל אישה שמעוניינת במראה מושלם וטיפוח מושלם.
                    </p>
                    {/* TODO: decide if it will  be button or link */}
                    <Button classes='ms-auto'>לקביעת תור</Button>
                </animated.div>
            </div>
            {/* TODO: implement the view of full size screen */}
            <div about='computer view'></div>
        </div>
    )
}
