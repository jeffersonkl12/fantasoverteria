import { keyframes } from "@chakra-ui/react";

interface Prop {
    scaleValue?: number | string;
    scaleInitialValue?: number | string;
  }
  

const scaleAnimation = ({ scaleValue = .8,scaleInitialValue = 1 }: Prop) => {
    const animationFrames = keyframes`
      0% {transform: scale(${scaleInitialValue});}
      100% {transform: scale(${scaleValue})};
  
  `;

  const animation = `${animationFrames} 0.3s linear`;

  return animation;

};

export default scaleAnimation;
  
    