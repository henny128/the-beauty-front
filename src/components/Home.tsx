import Logo from "./sections/Logo";

export default function Home() {
  return (
    // TODO: fix the height of main to not be dvh, maybe use flex instead of grid
      <main className="grid grow grid-rows-[1fr_4rem] w-full">
        <Logo/>
      </main>
  )
}
