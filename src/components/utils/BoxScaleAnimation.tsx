import scaleAnimation from "@/animations/scaleAnimation";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Prop {
  children?: React.ReactNode;
  scaleValue?: number | string;
  scaleInitialValue?: number | string;
}

const BoxScaleAnimation = ({ children, scaleValue , scaleInitialValue }: Prop) => {
  const animation = scaleAnimation({ scaleValue: scaleValue, scaleInitialValue: scaleInitialValue });

  return (
    <>
      <Box
        as={motion.div}
        boxSize={"max-content"}
        animation={animation}
      >
        {children}
      </Box>
    </>
  );
};

export default BoxScaleAnimation;
