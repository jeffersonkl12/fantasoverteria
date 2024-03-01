import { Box, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Prop {
  children?: React.ReactNode;
}

const animationKeyFrames = keyframes`
    0% {opacity: .5;}
    100% {opacity: 1;}
`;

const animation = `${animationKeyFrames} 1s ease-in-out`;

const BoxFadeAnimation = ({ children }: Prop) => {
  return (
    <>
      <Box as={motion.div} animation={animation}>
        {children}
      </Box>
    </>
  );
};

export default BoxFadeAnimation;
