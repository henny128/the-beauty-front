import { createBrowserRouter, Outlet } from 'react-router'
import Header from './components/Navbar'
import Home from './components/Home'
import NotFound from './components/NotFound'
import { FaWhatsappSquare } from "react-icons/fa";
// import Footer from './components/Footer'

function App() {
  return (
    <div className='static scroll-wrapper  bg-(--wst-color-fill-base-shade-1)'>
      <div className="relative flex flex-col h-dvh w-full rtl-content">
        <Header />
        <Outlet />
      </div>
      <a className='absolute bottom-10 right-10 md:right-20 lg:right-30' href={import.meta.env.VITE_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <FaWhatsappSquare className='h-10 w-10 md:h-20 md:w-20 text-green-600 bg-white p-[0.20px] rounded-2xl' />
      </a>
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