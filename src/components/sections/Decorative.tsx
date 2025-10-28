import LazyImage from "../ui/LazyImage";

export default function Decorative() {
  return (
    <section className="w-full">
          <LazyImage src="2.JPG" className="w-full h-[200px] md:h-[300px] xl:h-[600px]" playAnimatiom={true}/>
    </section>
  )
}
