import { createBrowserRouter } from 'react-router'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
// import Footer from './components/Footer'

function App() {
  return (
    <div className="h-[100dvh] w-full overflow-y-auto bg-(--wst-color-fill-base-shade-1) relative">
      <Header />

      {/* TODO: the main content need to be under header too, fix the css */}
      <Home />
    </div>
  )
}

export default App;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }
      //  TODO: add more routes here like gallery, profil, hairRemoval etc.
    ],
    errorElement: <NotFound />
  }
])