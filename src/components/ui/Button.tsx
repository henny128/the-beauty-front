import type { MouseEvent, ReactNode } from "react"
import { Link } from "react-router";

interface IButton {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    classes?: string;
    fill?: boolean;
    disabled?: boolean;
    to?: string;
    children: ReactNode;
}

export default function Button({
    onClick, classes = '', fill, disabled, to, children
}: IButton) {
    const buttonClasses = `py-2 px-4 rounded-md ${fill ? 'bg-(--wst-button-color-text-primary) text-white' : 'text-(--wst-button-color-text-primary) border-2 border-(--wst-button-color-text-primary)'} ${classes}`
    return (
        <>
            {to ?
                <Link to={to} className={buttonClasses}>{children}</Link>
                :
                <button onClick={onClick} className={buttonClasses} disabled={disabled}>{children}</button>
            }
        </>
    )
}
