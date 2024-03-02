import { Button } from "@chakra-ui/react";

interface ButtonPrimaryProp {
  children?: React.ReactNode;
  iconRight?: React.ReactElement;
  iconLeft?: React.ReactElement;
  style?: React.CSSProperties;
  secondary?: boolean;
  isBorder?: boolean;
  tamanho?: string | number;
}

const ButtonPrimary = ({
  secondary,
  isBorder = true,
  children,
  iconLeft,
  iconRight,
  tamanho = "14rem",
  style,
}: ButtonPrimaryProp) => {
  return (
    <>
      <Button
        style={style}
        leftIcon={iconLeft}
        rightIcon={iconRight}
        bgColor={secondary ? "white":"rosa.100"}
        color={"chocolate.100"}
        fontWeight={"normal"}
        border={isBorder ? "1px solid transparent": "none"}
        borderColor={secondary && isBorder  ? "chocolate.100": "rosa.100"}
        borderRadius={24}
        h={'3rem'}
        w={tamanho}
        minW={'max-content'}
        minH={'max-content'}
        cursor={'pointer'}
        _hover={{}}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonPrimary;
