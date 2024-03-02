import { keyframes } from "@chakra-ui/react";

interface Prop {
  scaleValue?: number | string;
}

const fadeAnimation = ({ scaleValue = 1 }: Prop) => {
  const animationKeyframes = keyframes`
    0% { opacity: 0;}
    100% { opacity: ${scaleValue}; }
    `;

  const animation = `${animationKeyframes} 1s ease-in-out`;

  return animation;
};

export default fadeAnimation;
