import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { TfiMenu } from "react-icons/tfi";

interface HeaderNavItemProp {
  info?: string;
  link?: string;
}

const HeaderNavItem = ({ info, link = "#" }: HeaderNavItemProp) => {
  return (
    <>
      <li style={{ padding: "1rem" }}>
        <Link to={link}>
          <Text fontWeight={"bold"}>{info} </Text>
        </Link>
      </li>
    </>
  );
};

const Header = () => {
  const [produtosMenuIsOpen, setProdutosMenuIsOpen] = useState(false);
  const [produtosMenuControl, setProdutosMenuControl] = useState(false);

  return (
    <>
      <header>
        <Box
          paddingX={{ base: "1rem", sm: "2rem" }}
          backgroundColor={"amarelo.100"}
          minH={"5rem"}
        >
          <Flex
            justify={"space-between"}
            align={"center"}
            w={"100%"}
            h={{ base: "6.5rem", sm: "10rem" }}
          >
            <Box minW={"14rem"}>
              <Box>
                <Heading
                  fontSize={{ base: "26px", sm: "2rem" }}
                  fontFamily={"Oregano, cursive"}
                >
                  Fantasoverteria
                </Heading>
              </Box>
            </Box>
            <HStack
              spacing={0}
              wrap={{ base: "wrap", "2xl": "nowrap" }}
              justify={"flex-end"}
            >
              <Box display={{ base: "none", lgx: "block" }}>
                <nav>
                  <ul style={{ display: "flex" }}>
                    <HeaderNavItem info="Home" />
                    <HeaderNavItem info="Sobre a Fantasoverteria" />
                    <li>
                      <Box padding={"1rem"}>
                        <Menu>
                          <MenuButton
                            fontWeight={"bold"}
                            as={Button}
                            bgColor={"transparent"}
                            padding={0}
                            w={"max-content"}
                            h={"max-content"}
                            _hover={{ bgColor: "transparent" }}
                            _active={{ bgColor: "transparent" }}
                            rightIcon={<ChevronDownIcon />}
                          >
                            Nossos Produtos
                          </MenuButton>
                          <MenuList bgColor={"rosa.100"}>
                            <MenuItem
                              bgColor={"rosa.100"}
                              _hover={{ bgColor: "white", color: "rosa.100" }}
                            >
                              Sorvetes
                            </MenuItem>
                            <MenuItem
                              bgColor={"rosa.100"}
                              _hover={{ bgColor: "white", color: "rosa.100" }}
                            >
                              Açaís
                            </MenuItem>
                            <MenuItem
                              bgColor={"rosa.100"}
                              _hover={{ bgColor: "white", color: "rosa.100" }}
                            >
                              Picolés
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Box>
                    </li>
                    <HeaderNavItem info="Contatos" />
                  </ul>
                </nav>
              </Box>

              <Box>
                <HStack spacing={"1.5rem"} paddingX={{ base: 0, md: "2rem" }}>
                  <Link to="#">
                    <MdEmail size={"1.5rem"} />
                  </Link>
                  <Link to="#">
                    <FaWhatsapp size={"1.5rem"} />
                  </Link>
                  <Link to="#">
                    <FaMagnifyingGlass size={"1.5rem"} />
                  </Link>
                  <Box display={{base: "block", lgx: "none"}} boxSize={"1.5rem"}>
                    <TfiMenu size="100%" />
                  </Box>
                </HStack>
              </Box>
              <Box display={{ base: "none", md: "block" }}>
                <Button
                  variant={"primaryIcon"}
                  rightIcon={<BiSolidRightArrow />}
                >
                  Produtos
                </Button>
              </Box>
            </HStack>
          </Flex>
        </Box>
      </header>
    </>
  );
};

const Template = () => {
  return (
    <>
      <div className="container-root">
        <Header />
      </div>
    </>
  );
};

export default Template;
