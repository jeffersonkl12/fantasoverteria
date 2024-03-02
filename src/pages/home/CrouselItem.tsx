import ImageBoxItem from "@/components/ImageBoxItem";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ButtonPrimary from "@/components/utils/ButtonPrimary";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import scaleAnimation from "@/animations/scaleAnimation";

interface CarouselItem {
  src?: string;
  titulo?: string;
  label?: string;
  info?: string;
}

const CarouselItem = ({ src, titulo, label, info }: CarouselItem) => {
  return (
    <>
      <Box position={"relative"} >
        <Flex
          position={"absolute"}
          boxSize={"100%"}
          justify={"center"}
          align={"center"}
          zIndex={1}
          padding={'1rem'}
        >
          <VStack spacing={"1.2rem"} maxW={"43rem"} minW={"21rem"}>
            <Text
              textAlign={"center"}
              fontSize={{ base: "1rem", md: "1.2rem" }}
              fontWeight={"bold"}
              color={"white"}
            >
              {label}
            </Text>
            <Heading
              textAlign={"center"}
              fontSize={{ base: "2rem", md: "2.5rem" }}
              color={"white"}
              variant={"titulo"}
            >
              {titulo}
            </Heading>
            <Text
              textAlign={"center"}
              fontSize={{ base: "1rem", md: "1.4rem" }}
              color={"white"}
            >
              {info}
            </Text>
            <Flex direction={{ base: "column", md: "row" }} align={"center"}>
              <Box
                marginRight={{ base: 0, md: "1rem" }}
                as={motion.div}
                _hover={{ animation: scaleAnimation({ scaleValue: 0.8 }) }}
              >
                <ButtonPrimary
                  iconRight={<FaArrowAltCircleRight size={"1.2rem"} />}
                >
                  Faça seu pedido!
                </ButtonPrimary>
              </Box>

              <Box
                marginTop={{ base: "1rem", md: 0 }}
                marginLeft={{ base: 0, md: "1rem" }}
                as={motion.div}
                _hover={{ animation: scaleAnimation({ scaleValue: 1.2 }) }}
              >
                <ButtonPrimary
                  iconRight={<IoIosArrowDroprightCircle size={"1.4rem"} />}
                  secondary
                  isBorder={false}
                >
                  Nossos produtos
                </ButtonPrimary>
              </Box>
            </Flex>
          </VStack>
        </Flex>
        <ImageBoxItem src={src} />
        <Box
          position={"absolute"}
          left={0}
          top={0}
          boxSize={"100%"}
          bg={
            "linear-gradient(180deg, rgba(0,0,0,0.13769257703081228) 42%, rgba(0,0,0,0.7399334733893557) 85%);"
          }
        />
      </Box>
    </>
  );
};

export default CarouselItem;
