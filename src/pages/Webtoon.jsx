import React from 'react';

const Webtoon = () => {
    // Placeholder for 4 images.
    // Replace these src values with your actual image paths (e.g., "/images/part1.jpg")
    const images = [
        { id: 1, src: "https://raw.githubusercontent.com/bluecub-e/img/refs/heads/main/Frame%20174.webp" },
        { id: 2, src: "https://raw.githubusercontent.com/bluecub-e/img/refs/heads/main/Frame%20175.webp" },
        { id: 3, src: "https://raw.githubusercontent.com/bluecub-e/img/refs/heads/main/Frame%20176.webp" },
        { id: 4, src: "https://raw.githubusercontent.com/bluecub-e/img/refs/heads/main/Frame%20177.webp" },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen bg-black">
            <div className="w-full max-w-xl mx-auto bg-white shadow-2xl overflow-hidden">
                <div className="flex flex-col">
                    {images.map((img) => (
                        <img
                            key={img.id}
                            src={img.src}
                            alt={`Webtoon Part ${img.id}`}
                            className="w-full h-auto block"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Webtoon;
