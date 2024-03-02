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
import CardProduto from "@/components/CardProduto";
import Sorvete from "@assets/imgs/sorvete1.jpg";

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
                  <Flex
                    direction={{ base: "column", lg: "row" }}
                    justify={"center"}
                    align={"stretch"}
                    w={"100%"}
                  >
                    <Box w={{ base: "100%", lg: "40vw" }}>
                      <Image
                        src={SorveteBola1}
                        boxSize={"100%"}
                        objectFit={"cover"}
                        objectPosition={"center"}
                        borderRadius={{ base: 20, lg: "20px 0 0 20px" }}
                      />
                    </Box>
                    <Box
                      paddingX={{ base: "2rem", lg: "5rem" }}
                      paddingTop={"3rem"}
                      paddingBottom={"4rem"}
                      bgColor={"white"}
                      borderRightRadius={20}
                      flex={1}
                    >
                      <VStack align={"stretch"} spacing={"2rem"}>
                        <Heading
                          textAlign={{ base: "center", lg: "start" }}
                          variant={"subtitulo"}
                        >
                          Sorvetes incrivelmente cremosos!
                        </Heading>
                        <Heading
                          textAlign={{ base: "center", lg: "start" }}
                          variant={"titulo"}
                        >
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
                          align={{ base: "center" }}
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
                  <Flex
                    direction={{ base: "column", lg: "row" }}
                    justify={"space-between"}
                    align={{ base: "center", lg: "flex-start" }}
                    w={"100%"}
                    minH={"max-content"}
                    paddingTop={"3rem"}
                  >
                    <Box
                      w={{ base: "max-content", lg: "calc((100% / 4) - 20px)" }}
                    >
                      <CardInfo
                        src={People1}
                        titulo="Qualidade incomparável!"
                      />
                    </Box>
                    <Box
                      w={{ base: "max-content", lg: "calc((100% / 4) - 20px)" }}
                      marginTop={{ base: "2rem", lg: 0 }}
                    >
                      <CardInfo src={People2} titulo="Mega cremoso!" />
                    </Box>
                    <Box
                      w={{ base: "max-content", lg: "calc((100% / 4) - 20px)" }}
                      marginTop={{ base: "2rem", lg: 0 }}
                    >
                      <CardInfo src={People3} titulo="Mega cremoso!" />
                    </Box>
                    <Box
                      w={{ base: "max-content", lg: "calc((100% / 4) - 20px)" }}
                      marginTop={{ base: "2rem", lg: 0 }}
                    >
                      <CardInfo src={People4} titulo="Diversos sabores!" />
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Center>
          </SectionContainer>
          <SectionContainer>
            <VStack>
              <VStack spacing={"0.5rem"}>
                <Heading variant={"titulo"} textAlign={"center"}>
                  Sorvetes, picolés e muito mais!
                </Heading>
                <Box
                  paddingX={{ base: 0, md: "9rem" }}
                  w={{ base: "100%", lg: "80%" }}
                >
                  <Text variant={"texto"} textAlign={"center"}>
                    Temos diversos sabores e tamanhos de sorvetes, casquinhas,
                    picolés e açaí. É sorvete para todo tipo de gosto! Conheça
                    nossa linha de produtos!
                  </Text>
                </Box>
              </VStack>
              <Flex>
                <CardProduto
                  src={Sorvete}
                  titulo="Sorvete de Morango"
                  info="Prove o clássico e delicioso sorvete de morango, com frutas selecionadas, com sabor natural da fruta, para uma colherada de puro prazer."
                  preco={"30,00"}
                />
              </Flex>
            </VStack>
          </SectionContainer>
        </Box>
      </Box>
    </>
  );
};

export default Home;
