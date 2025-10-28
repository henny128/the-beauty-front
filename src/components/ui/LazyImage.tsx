import React, { useState } from "react";

interface LazyImageProps {
    src: string;
    alt?: string;
    className?: string;
    playAnimatiom?: boolean;
}

// TODO: write classes for father and image to set size and position
const LazyImage: React.FC<LazyImageProps> = ({ src, alt = "", className ="", playAnimatiom }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative ${className}`}>
            {!loaded && playAnimatiom && (
                <div className={` bg-gray-200 animate-pulse absolute inset-0` } />
            )}

            <img
                src={src}
                alt={alt}
                className={`${className} w-full transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(true)} // optional: hide loader even if it fails
            />
        </div>
    );
};

export default LazyImage;
