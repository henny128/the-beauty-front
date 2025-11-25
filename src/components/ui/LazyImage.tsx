import { useState } from "react";

interface LazyImageProps {
    src: string;
    alt?: string;
    classesContainer?: string;
    classesImage?: string;
    playAnimatiom?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt = "", classesContainer = "", classesImage = "", playAnimatiom }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative ${classesContainer}`}>
            {!loaded && playAnimatiom && (
                <div className={` bg-gray-200 animate-pulse absolute inset-0` } />
            )}

            <img
                src={src}
                alt={alt}
                className={`h-full w-full transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${classesImage}`}
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(true)} // optional: hide loader even if it fails
            />
        </div>
    );
};

export default LazyImage;
