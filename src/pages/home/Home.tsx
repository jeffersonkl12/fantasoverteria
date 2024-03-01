import { Box } from "@chakra-ui/react";
import SorveteDois from "@assets/imgs/bg-carousel2.jpg";
import SorveteUm from "@assets/imgs/bg-carousel1.jpg";
import Carousel from "@/components/Carousel";
import CarouselItem from "./CrouselItem";

const Home = () => {
  return (
    <>
      <Box>
        <Box position={"relative"}>
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
      </Box>
    </>
  );
};

export default Home;
