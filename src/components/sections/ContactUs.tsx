import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import LazyImage from "../ui/LazyImage";


export default function ContactUs() {
    return (
        <section>
            <div className="flex flex-col-reverse word-space text-left " about='mobile and desktop view'>
                <div className="flex justify-around items-center space-y-4 m-2 border rounded-r-lg ">
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl font-bold text-[var(--wst-button-color-text-primary)]">היופי שבך</h2>
                        <p className="flex gap-1 destroy-word-space"><a href={import.meta.env.VITE_LOCATION_URL} target="_blank" rel="noopener noreferrer"><MdLocationPin className="h-6 w-6" /></a> <span>אבן יהודה שכונת וותיקים</span></p>
                    </div>
                    <div className="flex gap-2">
                        <a href={import.meta.env.VITE_FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><FaFacebook className="h-6 w-6" /></a>
                        <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><RiInstagramFill className="h-6 w-6" /></a>
                    </div>

                </div>
                {/* TODO: replace with real image and write a desktop option */}
                <LazyImage src="/girl.png" classesContainer="md:hidden h-[34.375rem] w-full object-cover"/>
            </div>
        </section>
    )
}
