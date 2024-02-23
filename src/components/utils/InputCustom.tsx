import { Input } from "@chakra-ui/react";

interface Prop {
  holder?: string;
  type?: string;
  style?: React.CSSProperties;
  name?: string;
  value?: any;
  onClick?: () => void;
}

const InputCustom = ({
  holder,
  type = "text",
  style,
  name,
  value,
  onClick,
}: Prop) => {
  return (
    <>
      <Input
        style={style}
        placeholder={holder}
        type={type}
        name={name}
        value={value}
        bgColor={"transparent"}
        borderWidth={"5px"}
        borderColor={"cinza.50"}
        borderRadius={1}
        textAlign={"center"}
        color={"white"}
        _placeholder={{ color: "cinza.50" }}
        fontSize={{ base: "1.1rem",sm: "1.5rem" ,md: "2rem", lg: "3rem" }}
        h={{ base: "2.5rem", sm: "4rem", md: "5rem" }}
        minH={"max-content"}
        _hover={{}}
        focusBorderColor="cinza.50"
        onClick={onClick}
      />
    </>
  );
};

export default InputCustom;
