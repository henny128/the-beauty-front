import { FiScissors, FiSun, FiDroplet, FiFeather, FiBriefcase, FiUser } from 'react-icons/fi'
import Button from '../ui/Button'

const OurServicesArr = [
    {
        id: 'nails',
        Icon: FiScissors,
        title: 'עיצוב ציפורניים',
        description: 'ג׳ל, אקריל והארכות בהתאמה אישית — עיצוב מדויק ועמיד.'
    },
    {
        id: 'hair',
        Icon: FiFeather,
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
            <section className="py-8">
                <h2 className="text-2xl text-center font-bold mb-4 text-[var(--wst-button-color-text-primary)]">השירותים שלנו</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[30%_40%_30%] gap-6">
                    {OurServicesArr.map(({ id, Icon, title, description }) => (
                        <article key={id} className="flex flex-col items-center gap-3 p-4 bg-white/5">
                            <div className="text-[var(--wst-button-color-text-primary)] text-3xl">
                                <Icon />
                            </div>
                            <h3 className="text-lg font-semibold">{title}</h3>
                            <p className="text-sm text-muted-foreground">{description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}
