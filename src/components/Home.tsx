import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import Decorative from "./sections/Decorative";
import Logo from "./sections/Logo";
import OurServices from "./sections/OurServices";
import Reviews from "./sections/Reviews";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
        <Logo/>
        <AboutUs />
        <OurServices/>
        <Decorative/>
        <Reviews/>
        <ContactUs/>
      </main>
  )
}
