import React, { useRef, useEffect } from 'react';

const InfoVideo = ({ video, delay }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return <video ref={videoRef} src={video} />;
}

export default InfoVideo;
