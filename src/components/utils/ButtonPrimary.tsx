import { Button } from "@chakra-ui/react";

interface ButtonPrimaryProp {
  children?: React.ReactNode;
  iconRight?: React.ReactElement;
  iconLeft?: React.ReactElement;
  style?: React.CSSProperties;
  secondary?: boolean;
  isBorder?: boolean;
}

const ButtonPrimary = ({
  secondary,
  isBorder = true,
  children,
  iconLeft,
  iconRight,
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
        border={secondary && isBorder ? "1px solid black": "none"}
        borderColor={secondary && isBorder  ? "chocolate.100": ""}
        borderRadius={24}
        h={'3rem'}
        w={'14rem'}
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
