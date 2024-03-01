interface Prop {
  scaleValue?: number | string;
}

const fadeAnimation = ({ scaleValue = 1 }: Prop) => {
  const animationKeyframes = keyframes`
    0% { transform: scale(0);}
    100% { transform: scale(${scaleValue}); 100vh; }
    `;

  const animation = `${animationKeyframes} 1s ease-in-out`;

  return animation;
};

export default fadeAnimation;
