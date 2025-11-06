import LazyImage from "../ui/LazyImage";

export default function Decorative() {
  return (
    <section
    // TODO:FIX THE HIGHT(REMAMER DO MACH PONE IPAD AND DESKTOP SREEN)
      className="w-full h-[100px] md:h-[200px] lg:h-[300px]"
      style={{
        backgroundImage: 'url(5.JPG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}>
      
    </section>
  )
}
