import Header from './components/Header'
// import Footer from './components/Footer'

function App() {
  return (
    <div className="h-[100dvh] w-full overflow-y-auto bg-(--wst-color-fill-base-shade-1) relative pt-16">
      {/* Fixed header: full width, permanent height (4rem = h-16) */}
      <header className="fixed top-0 left-0 w-full h-22 z-50">
        <Header />
      </header>

      {/* Grid: main fills remaining height, footer has same height as header */}
      <div className="grid min-h-[calc(100dvh-4rem)] grid-rows-[1fr_4rem] w-full">
        <main className="w-full">
          <div className="p-4">
            <h1 className="text-2xl font-semibold">Home</h1>
            <p className="mt-2">Main content fills remaining height and the app scrolls vertically.</p>
          </div>
        </main>

        <footer className="w-full h-16">
          {/* <Footer /> */}
          footer
        </footer>
      </div>
    </div>
  )
}

export default App
