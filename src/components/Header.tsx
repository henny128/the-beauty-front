import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full h-22 z-50">
            <div
                aria-label="Mobile menu"
                onClick={() => setOpen(false)}
                className={
                    "fixed inset-0 z-40 py-2 px-4 bg-[var(--wst-color-fill-base-shade-1)] transform transition-all duration-500 ease-in-out flex " +
                    (open
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "-translate-y-full opacity-0 pointer-events-none")
                }
            >
                <div onClick={(e) => e.stopPropagation()} className="flex flex-col mt-30 mx-auto gap-5">
                    <NavLink to={"/"} className={"text-4xl font-semibold text-right text-[var(--wst-color-fill-base-2)] "} end>Home</NavLink>
                    <NavLink to={"/gallery"} className={"text-4xl font-semibold text-right text-[var(--wst-color-fill-base-2)] "} end>Gallery</NavLink>
                </div>
            </div>
            <div className={"relative z-50 flex items-center h-full w-full py-2 px-4 md:px-10 " + (open ? "justify-around md:justify-between" : "justify-between")}>
                    {/* // TODO: add loader image */}
                <button
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((s) => !s)}
                    className="relative w-10 h-10 flex items-center justify-center text-[var(--wst-color-fill-base-2)] "
                >
                    <span
                        className={
                            "block absolute w-6 h-0.5 bg-current transition-transform duration-500 " +
                            (open ? "rotate-45" : "-translate-y-2")
                        }
                        aria-hidden
                    />
                    <span
                        className={
                            "block absolute w-6 h-0.5 bg-current transition-opacity duration-200 " +
                            (open ? "opacity-0" : "opacity-100")
                        }
                        aria-hidden
                    />
                    <span
                        className={
                            "block absolute w-6 h-0.5 bg-current transition-transform duration-500 " +
                            (open ? "-rotate-45" : "translate-y-2")
                        }
                        aria-hidden
                    />
                </button>
                {!open && <h5 className={"text-3xl font-semibold text-right text-[var(--wst-color-fill-base-2)] "}>
                    היופי שבך
                </h5>}
                <Link to={"/profil"}>
                    <img className="h-10 w-10 rounded-full" src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg" alt="" />
                </Link>
            </div>
        </header>
    );
}
