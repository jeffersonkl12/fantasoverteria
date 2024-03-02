import { Box, Image, Text, VStack } from "@chakra-ui/react";

interface Prop {
  src?: string;
  titulo?: string;
  style?: React.CSSProperties;
}

const CardInfo = ({ src, titulo, style }: Prop) => {
  return (
    <>
      <Box maxW={"16rem"} borderRadius={20} bgColor={"white"} style={style} >
        <VStack>
          <Box>
            <Image src={src} borderTopRadius={20} />
          </Box>
          <Box padding={"1rem"}>
            <Text variant={"texto"}>{titulo}</Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default CardInfo;
