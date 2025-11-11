
export default function Decorative() {
  return (
    <section
    // TODO:FIX THE HIGHT(REMAMER DO MACH PONE IPAD AND DESKTOP SREEN)
      className="w-full h-[300px] md:h-[450px] lg:h-[600px]"
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
