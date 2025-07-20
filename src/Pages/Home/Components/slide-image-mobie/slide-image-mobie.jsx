
import React, { useEffect, useRef, useState } from 'react';
import styles from './slide-image-mobie.module.scss';

function SlideImageMobie(props) {
    const [index, setIndex] = useState(0);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const listImg = [
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:format(webp):quality(75)/mb_header_c7916b1ded.png",
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:format(webp):quality(75)/mb_header_Sach_1a9f17732a.png",
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:format(webp):quality(75)/mb_header_3c064c5808.png"
    ];

    // Tự động chuyển slide
    useEffect(() => {
        const handleTime = setTimeout(() => {
            setIndex((prev) => (prev === listImg.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearTimeout(handleTime);
    }, [index]);

    // Xử lý vuốt tay
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const deltaX = touchStartX.current - touchEndX.current;
        const threshold = 50; // ngưỡng vuốt

        if (deltaX > threshold) {
            // Vuốt trái -> ảnh tiếp theo
            setIndex((prev) => (prev === listImg.length - 1 ? 0 : prev + 1));
        } else if (deltaX < -threshold) {
            // Vuốt phải -> ảnh trước
            setIndex((prev) => (prev === 0 ? listImg.length - 1 : prev - 1));
        }

        // Reset
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div
            className={styles.mainImg}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div>
                <img src={listImg[index]} alt='' className={styles.img} />
            </div>
        </div>
    );
}

export default SlideImageMobie;
