import LazyImage from "../ui/LazyImage";

export default function ContactUs() {
    return (
        <section>
            <div className="flex  flex-col-reverse word-space text-left " about='mobile view'>
                <div className="flex flex-col items-center space-y-4 m-2 border rounded-r-lg ">
                    <h2 className="text-3xl font-bold text-[var(--wst-button-color-text-primary)]">היופי שבך</h2>
                    <div></div>
                    <div></div>

                </div>
                <div className="relative top-0 h-[34.375rem] md:h-dvh md:w-1/2 w-full bg-[url(girl.png)] md:bg-[size:31.25rem_100dvh] lg:bg-[size:43.75rem_100dvh] md:bg-[position:right_center] bg-no-repeat bg-cover md:bg-fixed">
                </div>
            </div>
        </section>
    )
}
