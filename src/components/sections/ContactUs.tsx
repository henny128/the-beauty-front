import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import LazyImage from "../ui/LazyImage";


export default function ContactUs() {
    return (
        <section>
            <div className="grid justify-items-stretch word-space text-left " about='mobile and desktop view'>
                <LazyImage src="/girl.png" classesContainer="lg:justify-self-center h-[34.375rem] w-full lg:w-1/2 object-cover" />
                <div className="flex justify-evenly items-center m-2 border rounded-r-lg ">
                    <div className="flex flex-col items-center mr-5">
                        <h2 className="text-3xl font-bold text-[var(--wst-button-color-text-primary)]">היופי שבך</h2>
                        <p className="flex gap-1 destroy-word-space"><a href={import.meta.env.VITE_LOCATION_URL} target="_blank" rel="noopener noreferrer"><MdLocationPin className="h-6 w-6" /></a> <span>אבן יהודה שכונת וותיקים</span></p>
                    </div>
                    <div className="flex mr-5 gap-2" about="links">
                        <a href={import.meta.env.VITE_FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><FaFacebook className="h-6 w-6" /></a>
                        <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><RiInstagramFill className="h-6 w-6" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
