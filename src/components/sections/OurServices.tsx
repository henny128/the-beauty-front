import { FiScissors, FiSun, FiDroplet, FiBriefcase, FiUser } from 'react-icons/fi'
import { TiPointOfInterestOutline } from "react-icons/ti";
import FadeUp from '../ui/FadeUp';
import FadeLeft from '../ui/FadeLeft';
import FadeRight from '../ui/FadeRight';

const OurServicesArr = [
    {
        id: 'nails',
        Icon: FiScissors,
        title: 'עיצוב ציפורניים',
        description: 'ג׳ל, אקריל והארכות בהתאמה אישית — עיצוב מדויק ועמיד.'
    },
    {
        id: 'hair',
        Icon: TiPointOfInterestOutline,
        title: 'תסרוקות והסטיילינג',
        description: 'תסרוקות לאירועים וסטייל מקצועי להדגשת המראה הטבעי.'
    },
    {
        id: 'skin',
        Icon: FiDroplet,
        title: 'טיפולי פנים',
        description: 'טיפולי פנים מותאמים לעורך עם חומרים עדינים ואפקטיביים.'
    },
    {
        id: 'sun',
        Icon: FiSun,
        title: 'שיזוף וטיפוח גוף',
        description: 'טיפולי שיזוף טבעי וטיפוח לעור חלק וזוהר.'
    },
    {
        id: 'makeup',
        Icon: FiBriefcase,
        title: 'איפור מקצועי',
        description: 'איפור ערב ויום — מראה מחמיא ועמיד לכל אירוע.'
    },
    {
        id: 'consult',
        Icon: FiUser,
        title: 'ייעוץ מקצועי',
        description: 'ייעוץ אישית לצרכי טיפוח ושיקום והמלצות למוצרים.'
    }
]

export default function OurServices() {
    return (
        <>
            <section className="py-8 overflow-hidden">
                <FadeUp>

                    <h2 className="text-3xl text-center font-medium mb-4 word-space">השירותים שלנו</h2>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-[auto_40%_auto] gap-6 overflow-hidden">
                    {OurServicesArr.map(({ id, Icon, title, description }, index) => {
                        const isEven = index == 1 || index  === 4;
                        const isRightElement = index == 0 || index == 3;
                        const isLeftElement = index == 2 || index == 5;

                        let elements;
                        let children = <>
                            <div className="text-3xl">
                                <Icon />
                            </div>
                            <h3 className="text-lg font-bold">{title}</h3>
                            <p className="text-sm text-muted-foreground">{description}</p>
                        </>
                        let classes = 'flex flex-col items-center gap-3 p-4 bg-white/5 word-space'

                        if (isEven) elements = <FadeUp key={id} className={`${classes}`}>
                            {children}
                        </FadeUp>

                        if (isLeftElement) elements = <FadeLeft key={id} className={`${classes}`}>
                            {children}
                        </FadeLeft>

                        if (isRightElement) elements = <FadeRight key={id} className={`${classes}`}>
                            {children}
                        </FadeRight>

                        return (
                            elements
                        )
                    })}
                </div>
            </section>
        </>
    )
}
