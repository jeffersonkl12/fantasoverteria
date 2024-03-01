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
  UnorderedList,
  ListItem,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  AccordionIcon,
  VStack,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { MdEmail, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { FaMagnifyingGlass, FaLocationDot } from "react-icons/fa6";
import { BiSolidRightArrow } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import InputCustom from "../components/utils/InputCustom";
import UnderlineBox from "../components/utils/UnderlineBox";
import InputPrimary from "../components/utils/InputPrimary";
import TextAreaCustom from "../components/utils/TextAreaCustom";
import ButtonCustom from "../components/utils/ButtonCustom";
import { colors } from "../utils/theme";
import BoxScaleAnimation from "@/components/utils/BoxScaleAnimation";

interface ContenteContatFooterProp {
  titulo?: string;
  children?: React.ReactNode;
}

const ContenteContatFooter = ({
  titulo,
  children,
}: ContenteContatFooterProp) => {
  return (
    <>
      <VStack spacing={3}>
        <Heading variant={"titulo"} textAlign={"center"}>
          {titulo}
        </Heading>
        <Box w={{ base: "20%", md: "30%" }} minW={"250px"}>
          <UnderlineBox />
        </Box>
        {children}
      </VStack>
    </>
  );
};

interface IconTextFooterProp {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const IconTextFooter = ({ icon, children, style }: IconTextFooterProp) => {
  return (
    <>
      <HStack
        align={"center"}
        spacing={11}
        style={style}
        maxW={{ base: "390px", sm: "480px" }}
      >
        <Box as="button">{icon}</Box>
        <Text noOfLines={2} maxW={"390px"} textAlign={"center"}>
          {children}
        </Text>
      </HStack>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer>
        <Box padding={"1rem"} bgColor={"branco.50"}>
          <Flex
            justify={"center"}
            align={{ base: "center", md: "flex-start" }}
            direction={{ base: "column", md: "row" }}
          >
            <VStack spacing={25} marginRight={{ base: 0, md: "50px" }}>
              <ContenteContatFooter titulo="Fantasoverteria">
                <Text
                  variant={"texto"}
                  noOfLines={4}
                  maxW={"390px"}
                  textAlign={"center"}
                >
                  Com uma qualidade e sabor inigualável fomos capazes de crescer
                  e nos tornar uma grande marca e espalhar nossa
                  ‘’saborosidade’’ por todo o estado do ceará.
                </Text>
              </ContenteContatFooter>
              <ContenteContatFooter titulo="Fale Conosco">
                <IconTextFooter
                  style={{ alignItems: "flex-start" }}
                  icon={<FaLocationDot />}
                >
                  R. Prof. Osvaldo Franco, 55 - Centro, Betim - MG, 32510-050
                </IconTextFooter>
                <IconTextFooter icon={<FaPhoneAlt />}>
                  (XX) XXXX-XXX1
                </IconTextFooter>
                <IconTextFooter icon={<FaPhoneAlt />}>
                  (XX) XXXX-XXX2
                </IconTextFooter>
                <IconTextFooter icon={<FaWhatsapp />}>
                  (XX) XXXX-XXX3
                </IconTextFooter>
                <IconTextFooter icon={<FaWhatsapp />}>
                  (XX) XXXX-XXX4
                </IconTextFooter>
              </ContenteContatFooter>
            </VStack>

            <Box marginTop={{ base: "5rem", md: "0px" }}>
              <form>
                <VStack spacing={2}>
                  <InputPrimary holder="Nome" isRequerid />
                  <InputPrimary holder="E-mail" type={"email"} isRequerid />
                  <InputPrimary holder="Telefone" type="tel" isRequerid />
                  <TextAreaCustom
                    holder="Menssagem"
                    style={{ minHeight: "110px" }}
                    isRequerid
                  />
                  <ButtonCustom
                    text="Enviar mensagem"
                    rightIcon={
                      <MdOutlineKeyboardDoubleArrowRight
                        size={25}
                        color={colors.chocolate[100]}
                      />
                    }
                  />
                </VStack>
              </form>
            </Box>
          </Flex>
        </Box>
        <Box bgColor={"amarelo.100"} paddingY={15}>
          <Flex
            justify={{ base: "center" }}
            align={"center"}
            direction={{ base: "column", md: "row" }}
            marginX={10}
          >
            <HStack justifySelf={"flex-start"} flex={1}>
              <IconMobileHeader
                icon={<FaWhatsapp />}
                style={{ backgroundColor: "white" }}
              />
              <IconMobileHeader
                icon={<FaInstagram />}
                style={{ backgroundColor: "white" }}
              />
              <IconMobileHeader
                icon={<FaPinterest />}
                style={{ backgroundColor: "white" }}
              />
            </HStack>
            <Box marginTop={{ base: "1rem", md: "0px" }} flex={1}>
              <Text textAlign={"center"}>Copyright &copy; 2024</Text>
            </Box>
            <Box flex={1}></Box>
          </Flex>
        </Box>
      </footer>
    </>
  );
};

interface SeacrhModalHeaderProp {
  onClickCloseIcon?: () => void;
}
const SeacrhModalHeader = ({ onClickCloseIcon }: SeacrhModalHeaderProp) => {
  return (
    <>
      <Box w={"100vw"} h={"100vh"} bgColor={"cinza.100"}>
        <Flex
          h={"100%"}
          justify={"center"}
          align={"center"}
          position={"relative"}
        >
          <Box w={"60%"}>
            <InputCustom holder="O que você procura ?" />
          </Box>
          <Box
            as="button"
            pos={"absolute"}
            right={10}
            color="white"
            onClick={onClickCloseIcon}
          >
            <IoMdClose size={"30px"} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

interface IconMobileHeaderProp {
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const IconMobileHeader = ({ icon, style }: IconMobileHeaderProp) => {
  return (
    <>
      <Box
        padding={1.5}
        borderRadius={"full"}
        bgColor={"rosa.100"}
        style={style}
      >
        {icon}
      </Box>
    </>
  );
};

interface NavListAccordionMobileHeaderProp {
  info?: string;
  children?: React.ReactNode;
  select?: boolean;
  onClick?: () => void;
}

const NavListAccordionMobileHeader = ({
  info,
  children,
  select,
  onClick,
}: NavListAccordionMobileHeaderProp) => {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <Heading as={"h2"}>
            <AccordionButton
              border={"none"}
              padding={0}
              onClick={onClick}
              _hover={{}}
            >
              <Box as="span" w={"160px"} minW={"max-content"} textAlign="left">
                <NavListTextLinkMobileHeader
                  info={info}
                  select={select}
                  onClick={onClick}
                />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={0}>
            <UnorderedList listStyleType={"none"} margin={0}>
              {children}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

interface NavListTextLinkMobileHeaderProp {
  info?: string;
  link?: string;
  select?: boolean;
  onClick?: () => void;
}

const NavListTextLinkMobileHeader = ({
  info,
  link = "",
  select = false,
  onClick,
}: NavListTextLinkMobileHeaderProp) => {
  return (
    <>
      <Text color={select ? "black" : "gray"} fontSize={"1.2rem"}>
        <Link to={link} onClick={onClick}>
          {info}
        </Link>
      </Text>
    </>
  );
};

interface NavListTextListItemMobileHeaderProp {
  children?: React.ReactNode;
}

const NavListTextListItemMobileHeader = ({
  children,
}: NavListTextListItemMobileHeaderProp) => {
  return (
    <>
      <ListItem paddingY={3}>{children}</ListItem>
    </>
  );
};

const NavListMobileHeader = () => {
  const [selectItems, setSelectItems] = useState(new Array(4).fill(false));
  const [selectItemsProdutos, setselectItemsProdutos] = useState(
    new Array(3).fill(false)
  );

  useEffect(() => {
    const auxSelectItems = selectItems.slice();

    auxSelectItems[0] = true;

    setSelectItems(auxSelectItems);
  }, []);

  const onClickNavItem = (index: number) => {
    const auxSelectItems = selectItems.slice();
    const auxSelectItemsProdutos = selectItemsProdutos.slice();

    auxSelectItems.fill(false)[index] = true;
    auxSelectItemsProdutos.fill(false);

    setselectItemsProdutos(auxSelectItemsProdutos);
    setSelectItems(auxSelectItems);
  };

  const onClickNavItemProduto = (index: number) => {
    const auxSelectItemsProdutos = selectItemsProdutos.slice();

    auxSelectItemsProdutos.fill(false)[index] = true;

    onClickNavItem(2);
    setselectItemsProdutos(auxSelectItemsProdutos);
  };

  return (
    <>
      <nav>
        <UnorderedList listStyleType={"none"} margin={0}>
          <NavListTextListItemMobileHeader>
            <NavListTextLinkMobileHeader
              info="Home"
              onClick={() => onClickNavItem(0)}
              select={selectItems[0]}
            />
          </NavListTextListItemMobileHeader>

          <NavListTextListItemMobileHeader>
            <NavListTextLinkMobileHeader
              info="Sobre Fantasoverteria"
              onClick={() => onClickNavItem(1)}
              select={selectItems[1]}
            />
          </NavListTextListItemMobileHeader>

          <NavListTextListItemMobileHeader>
            <NavListAccordionMobileHeader
              info="Nossos Produtos"
              select={selectItems[2]}
            >
              <NavListTextListItemMobileHeader>
                <NavListTextLinkMobileHeader
                  info="Sorvetes"
                  select={selectItemsProdutos[0]}
                  onClick={() => onClickNavItemProduto(0)}
                />
              </NavListTextListItemMobileHeader>

              <NavListTextListItemMobileHeader>
                <NavListTextLinkMobileHeader
                  info="Açaís"
                  select={selectItemsProdutos[1]}
                  onClick={() => onClickNavItemProduto(1)}
                />
              </NavListTextListItemMobileHeader>
              <NavListTextListItemMobileHeader>
                <NavListTextLinkMobileHeader
                  info="Picolés"
                  select={selectItemsProdutos[2]}
                  onClick={() => onClickNavItemProduto(2)}
                />
              </NavListTextListItemMobileHeader>
            </NavListAccordionMobileHeader>
          </NavListTextListItemMobileHeader>

          <NavListTextListItemMobileHeader>
            <NavListTextLinkMobileHeader
              info="contatos"
              onClick={() => onClickNavItem(3)}
              select={selectItems[3]}
            />
          </NavListTextListItemMobileHeader>
        </UnorderedList>
      </nav>
    </>
  );
};

interface MenuMobileHeaderProp {
  hidden?: boolean;
  onClickCloseBtn?: () => void;
}

const MenuMobileHeader = ({
  hidden = true,
  onClickCloseBtn,
}: MenuMobileHeaderProp) => {
  return (
    <>
      <Box
        display={{ base: "block", lgx: "none" }}
        pos={"fixed"}
        w={"100vw"}
        h={"100vh"}
        left={0}
        top={0}
        padding={{ base: "1rem", md: "2rem" }}
        bgColor={"white"}
        hidden={hidden}
        zIndex={1}
      >
        <Box marginLeft={{ md: "10rem" }}>
          <Flex justify={"space-between"} align={"center"}>
            <Heading
              fontSize={{ base: "26px", sm: "2rem" }}
              fontFamily={"Oregano, cursive"}
            >
              Fantasoverteria
            </Heading>
            <Box as="button" onClick={onClickCloseBtn}>
              <IoMdClose size={36} />
            </Box>
          </Flex>
          <Box>
            <HStack paddingTop={1}>
              <IconMobileHeader icon={<FaWhatsapp size={16} />} />
              <IconMobileHeader icon={<MdEmail size={16} />} />
            </HStack>
            <Box paddingTop={5}>
              <VStack align={"flex-start"} spacing={8}>
                <Box w={"100%"}>
                  <NavListMobileHeader />
                </Box>
                <VStack spacing={2} align={"flex-start"}>
                  <Text fontWeight={"bold"} fontSize={"18px"}>
                    (33) 3333-3331
                  </Text>
                  <Text color={"GrayText"} fontSize={"12px"}>
                    R. Prof. Osvaldo Franco, 55 - Centro, Betim - MG, 32510-050
                  </Text>
                </VStack>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const MenuWindowHeader = () => {
  return (
    <>
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
    </>
  );
};

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
  const [isMobileHeader, setIsMobileHeader] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const onClickMenuMobile = () => {
    setIsMobileHeader(!isMobileHeader);
  };

  const onClickSearchIcon = () => {
    setIsSearchOpen(!isSearchOpen);
  };

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
            <Box minW={"10rem"}>
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
              <MenuWindowHeader />
              <MenuMobileHeader
                hidden={isMobileHeader}
                onClickCloseBtn={onClickMenuMobile}
              />
              <Box>
                <HStack spacing={"1.5rem"} paddingX={{ base: 0, md: "2rem" }}>
                  <Link to="#">
                    <MdEmail size={"1.5rem"} />
                  </Link>
                  <Link to="#">
                    <FaWhatsapp size={"1.5rem"} />
                  </Link>
                  <Box as="button" onClick={onClickSearchIcon}>
                    <FaMagnifyingGlass size={"1.5rem"} />
                  </Box>
                  {isSearchOpen && (
                    <Box
                      style={{ position: "fixed", zIndex: 11, left: 0, top: 0 }}
                    >
                      <BoxScaleAnimation scaleInitialValue={.2} scaleValue={1}>
                        <SeacrhModalHeader
                          onClickCloseIcon={onClickSearchIcon}
                        />
                      </BoxScaleAnimation>
                    </Box>
                  )}

                  <Box
                    display={{ base: "block", lgx: "none" }}
                    boxSize={"1.5rem"}
                    as="button"
                    onClick={onClickMenuMobile}
                  >
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
        <main>
          <Box>
            <Outlet />
          </Box>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Template;
