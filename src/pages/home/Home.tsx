import { Box, Image } from "@chakra-ui/react";
import SorveteUm from "@assets/imgs/bg-carousel1.jpg";
import Carousel from "@/components/Carousel";

const Home = () => {
  return (
    <>
      <Carousel>
        <Box bgColor={"red"} h={400}></Box>
        <Box bgColor={"green"} h={400}></Box>
        <Box bgColor={"yellow"} h={400}></Box>
      </Carousel>
    </>
  );
};

export default Home;
