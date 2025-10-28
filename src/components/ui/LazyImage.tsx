import React, { useState } from "react";

interface LazyImageProps {
    src: string;
    alt?: string;
    className?: string;
    playAnimatiom?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt = "", className, playAnimatiom }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            {!loaded && playAnimatiom && (
                <div className={`${className} bg-gray-200 animate-pulse absolute ` } />
            )}

            <img
                src={src}
                alt={alt}
                className={`${className ?? ""} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(true)} // optional: hide loader even if it fails
            />
        </>
    );
};

export default LazyImage;
