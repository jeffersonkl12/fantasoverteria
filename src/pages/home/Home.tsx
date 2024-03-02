import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import SorveteDois from "@assets/imgs/bg-carousel2.jpg";
import SorveteUm from "@assets/imgs/bg-carousel1.jpg";
import Carousel from "@/components/Carousel";
import CarouselItem from "./CrouselItem";
import { motion } from "framer-motion";
import scrollAnimationFade from "@/animations/scrollAnimationFade";
import { FaArrowRight } from "react-icons/fa";
import SectionContainer from "@/components/SectionContainer";
import SorveteBola1 from "@assets/imgs/ice-1.jpg";
import ButtonPrimary from "@/components/utils/ButtonPrimary";
import CardInfo from "../../components/CardInfo";
import People1 from "@assets/imgs/people-1.jpg";
import People2 from "@assets/imgs/people-2.jpg";
import People3 from "@assets/imgs/people-3.jpg";
import People4 from "@assets/imgs/people-4.jpg";

const Home = () => {
  return (
    <>
      <Box>
        <Box position={"relative"} zIndex={0}>
          <Carousel styleArrow={{ color: "white", fontSize: "1.5rem" }}>
            <CarouselItem
              src={SorveteUm}
              label="Qualidade, variedade e cremosidade!"
              titulo="Fantasorveteria"
              info="Uma explosão de sabor a cada colherada! São diversos tipos de
             sorvetes para você se deliciar!"
            />
            <CarouselItem
              src={SorveteDois}
              label="Diversos sabores e combinações!"
              titulo="Sorvetes e muito mais..."
              info="Aprecie nossos sabores incríveis de sorvetes, picolés, casquinhas e açaís. São delícias para todo tipo de gosto!"
            />
          </Carousel>
        </Box>
        <Box>
          <SectionContainer variant={{ variant: "secondary" }}>
            <Center>
              <Box maxW={"75rem"} w={"100%"}>
                <Flex
                  justify={"center"}
                  align={"center"}
                  direction={"column"}
                  as={motion.div}
                  animation={scrollAnimationFade()}
                  w={"100%"}
                >
                  <Flex direction={{base: "column", md: "row"}} justify={"center"} align={"stretch"} w={"100%"}>
                    <Box w={{base:"30vw", lg: "40vw"}}>
                      <Image
                        src={SorveteBola1}
                        boxSize={"100%"}
                        objectFit={"cover"}
                        objectPosition={"center"}
                        borderLeftRadius={20}
                      />
                    </Box>
                    <Box
                      paddingX={"5rem"}
                      paddingTop={"3rem"}
                      paddingBottom={"4rem"}
                      bgColor={"white"}
                      borderRightRadius={20}
                      flex={1}
                    >
                      <VStack align={"flex-start"} spacing={"2rem"}>
                        <Heading variant={"subtitulo"}>
                          Sorvetes incrivelmente cremosos!
                        </Heading>
                        <Heading variant={"titulo"}>
                          Qualidade e sabor incomparável!
                        </Heading>
                        <Text variant={"texto"}>
                          Nossa história começou em 1993. Com qualidade de
                          produção e sabor inigualável, conseguimos crescer e
                          nos tornar hoje, uma grande marca e espalhar nossas
                          delícias por toda Minas Gerais. Conheça um pouco mais
                          da Gellati!
                        </Text>
                        <Flex
                          direction={{ base: "column", xl: "row" }}
                          w={"max-content"}
                        >
                          <Box marginRight={{ base: 0, xl: "1rem" }}>
                            <ButtonPrimary iconRight={<FaArrowRight />}>
                              Mais sobre a sorveteria
                            </ButtonPrimary>
                          </Box>
                          <Box
                            marginTop={{ base: "1rem", xl: 0 }}
                            marginLeft={{ base: 0, xl: "1rem" }}
                          >
                            <ButtonPrimary
                              secondary
                              iconRight={<FaArrowRight />}
                            >
                              Conversar por WhatsApp
                            </ButtonPrimary>
                          </Box>
                        </Flex>
                      </VStack>
                    </Box>
                  </Flex>
                  <HStack
                    justify={"space-between"}
                    w={"100%"}
                    paddingTop={"3rem"}
                  >
                    <CardInfo src={People1} titulo="Qualidade incomparável!" />
                    <CardInfo src={People2} titulo="Mega cremoso!" />
                    <CardInfo src={People3} titulo="Mega cremoso!" />
                    <CardInfo src={People4} titulo="Diversos sabores!" />
                  </HStack>
                </Flex>
              </Box>
            </Center>
          </SectionContainer>
        </Box>
      </Box>
    </>
  );
};

export default Home;
