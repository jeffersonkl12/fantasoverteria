import { Button } from "@chakra-ui/react";

interface Prop {
  text?: string;
  style?: React.CSSProperties;
  rightIcon?: React.ReactElement;
  onClick?: () => void;
}

const ButtonCustom = ({ text, style, rightIcon, onClick }: Prop) => {
  return (
    <>
      <Button
        rightIcon={rightIcon}
        style={style}
        color={"chocolate.100"}
        bgColor={"rosa.100"}
        padding={"15px 30px"}
        h={50}
        borderRadius={12}
        _hover={{ bgColor: "cinza.25" }}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
};

export default ButtonCustom;
