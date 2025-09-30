import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <div className="h-full w-full ">

            <div
                aria-label="Mobile menu"
                onClick={() => setOpen(false)}
                className={
                    "fixed inset-0 z-40 py-2 px-4 bg-[var(--wst-color-fill-base-shade-1)] transform transition-all duration-500 ease-in-out " +
                    (open
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "-translate-y-full opacity-0 pointer-events-none")
                }
            >
                <div onClick={(e) => e.stopPropagation()} className="mt-16">

                </div>
            </div>
            <div className="relative z-50 flex items-center justify-between h-full w-full py-2 px-4">
                <h5 className={"text-lg font-semibold text-right text-[var(--wst-color-fill-base-2)] " + (open && "opacity-0")}>
                    היופי שבך
                </h5>
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
            </div>
        </div>
    );
}
