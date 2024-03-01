import ImageBoxItem from "@/components/ImageBoxItem";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ButtonPrimary from "@/components/utils/ButtonPrimary";
import { Box, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import BoxScaleAnimation from "@/components/utils/BoxScaleAnimation";

interface CarouselItem {
  src?: string;
  titulo?: string;
  label?: string;
  info?: string;
}

const CarouselItem = ({ src, titulo, label, info }: CarouselItem) => {
  return (
    <>
      <Box position={"relative"}>
        <Flex
          position={"absolute"}
          boxSize={"100%"}
          justify={"center"}
          align={"center"}
          zIndex={1}
        >
          <VStack spacing={"1.2rem"}>
            <Text
              textAlign={"center"}
              fontSize={"1.2rem"}
              fontWeight={"bold"}
              color={"white"}
            >
              {label}
            </Text>
            <Heading textAlign={"center"} fontSize={"2.5rem"} color={"white"}>
              {titulo}
            </Heading>
            <Text
              textAlign={"center"}
              fontSize={"1.4rem"}
              color={"white"}
              maxW={"43rem"}
            >
              {info}
            </Text>
            <HStack>
              <BoxScaleAnimation scaleValue={.8}>
                <ButtonPrimary iconRight={<FaArrowAltCircleRight />}>
                  Faça seu pedido!
                </ButtonPrimary>
              </BoxScaleAnimation>
              <BoxScaleAnimation scaleValue={1.2}>
                <ButtonPrimary
                  iconRight={<IoIosArrowDroprightCircle />}
                  secondary
                >
                  Nossos produtos
                </ButtonPrimary>
              </BoxScaleAnimation>
            </HStack>
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
        <Box
          position={"absolute"}
          bottom={0}
          left={0}
          w={"100%"}
          h={"30vh"}
          zIndex={1}
        >
          <svg
            style={{ width: "100%", height: "auto" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,160L60,170.7C120,181,240,203,360,186.7C480,171,600,117,720,106.7C840,96,960,128,1080,144C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </Box>
      </Box>
    </>
  );
};

export default CarouselItem;
