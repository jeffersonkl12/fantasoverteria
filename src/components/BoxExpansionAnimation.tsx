import { Box, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Prop {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const animationKeyframes = keyframes`
0% { transform: scale(0);}
100% { transform: scale(1); 100vh; }
`;

const animation = `${animationKeyframes} 1s ease-in-out`;

const BoxExpansionAnimation = ({ children, style }: Prop) => {
  return (
    <>
      <Box as={motion.div} animation={animation} style={style}>
        {children}
      </Box>
    </>
  );
};

export default BoxExpansionAnimation;
