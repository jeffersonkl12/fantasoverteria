import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import ButtonPrimary from "./utils/ButtonPrimary";

const StarCardProduto = () => {
  return (
    <Box color={"yellow"} as="span" fontSize={"1.5rem"}>
      &#9733;
    </Box>
  );
};

interface CardTituloProp {
  titulo?: string;
  preco?: string | number;
}

const CardTitulo = ({ titulo, preco }: CardTituloProp) => {
  return (
    <Flex
      mt={6}
      minH={"max-content"}
      h={{ base: "max-content", lg: "3.5rem" }}
      w={"100%"}
      justify={"space-between"}
      align={"stretch"}
      direction={{ base: "column", lg: "row" }}
    >
      <Stack>
        <Heading fontSize={"lg"}>{titulo}</Heading>
        <HStack>
          <StarCardProduto />
          <StarCardProduto />
          <StarCardProduto />
          <StarCardProduto />
          <StarCardProduto />
        </HStack>
      </Stack>
      <Flex
        bgColor={"cinza.100"}
        padding={{ base: "0.8rem", lg: "0.5rem" }}
        maxW={{ base: "100%", lg: "8rem" }}
        w={"100%"}
        flex={1}
        justify={"center"}
        align={"center"}
      >
        <Text
          color={"white"}
          fontWeight={"bold"}
          fontSize={"1.2rem"}
          w={"100%"}
          textAlign={"center"}
        >
          {`R$ ${preco}`}
        </Text>
      </Flex>
    </Flex>
  );
};

interface Prop {
  secondary?: boolean;
  titulo?: string;
  info?: string;
  preco?: string | number;
  src?: string;
}

const CardProduto = ({ secondary = false, titulo, info, preco, src }: Prop) => {
  return (
    <>
      <Card
        bgColor={"branco.50"}
        maxW={"31rem"}
        minH={"36rem"}
        position={"relative"}
      >
        <CardBody>
          <Image src={src} w={"lg"} />
          {!secondary && <CardTitulo titulo={titulo} preco={preco} />}
          <Box paddingTop={"1.5rem"}>
            <Text variant={"texto"}>{info}</Text>
          </Box>
          <Box position={"absolute"} bottom={"1rem"} w={"100%"}>
            <Center>
              <VStack>
                {secondary && (
                  <Text
                    variant={"texto"}
                    fontWeight={"bold"}
                    fontSize={"1.2rem"}
                  >
                    {`R$ ${preco}`}
                  </Text>
                )}

                <ButtonPrimary style={{ width: "8rem", height: "2rem" }}>
                  Mais detalhes
                </ButtonPrimary>
              </VStack>
            </Center>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default CardProduto;
