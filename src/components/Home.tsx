import AboutUs from "./sections/AboutUs";
import Decorative from "./sections/Decorative";
import Logo from "./sections/Logo";
import OurServices from "./sections/OurServices";
import Reviews from "./sections/Reviews";

export default function Home() {
  return (
    // TODO: fix the height of main to not be dvh, maybe use flex instead of grid
    <main className="flex flex-col w-full">
        <Logo/>
        <AboutUs />
        <OurServices/>
        <Decorative/>
        <Reviews/>
      </main>
  )
}
