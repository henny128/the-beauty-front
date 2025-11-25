
import React from 'react';

interface ParallaxProps {
    backgroundImage: string;
    children?: React.ReactNode;
    height?: string;
    className?: string;
}

export function Parallax({
    backgroundImage,
    children,
    height = '400px',
    className = '',
}: ParallaxProps) {
    return (
        <div
            className={`relative overflow-hidden ${className}`}
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                }}
            />

            {/* Content layer */}
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
}