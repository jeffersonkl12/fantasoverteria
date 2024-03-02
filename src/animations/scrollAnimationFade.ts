import { keyframes } from "@emotion/react";


const scrollAnimationFade = () => {
    const animationFrames = keyframes`
        0% {
            opacity: 0;
            transform: translateX(100vw);
            visibility: hidden;
        }
        100% {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
        }
    `;

    const animation = `${animationFrames} 1s ease-out`;

    return animation;
};

export default scrollAnimationFade;