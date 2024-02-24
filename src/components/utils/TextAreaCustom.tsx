import { Textarea } from "@chakra-ui/react";

interface Prop {
  holder?: string;
  style?: React.CSSProperties;
  isRequerid?: boolean;
}

const TextAreaCustom = ({ holder, style, isRequerid = false }: Prop) => {
  return (
    <>
      <Textarea
        required={isRequerid}
        style={style}
        placeholder={holder}
        bgColor={"branco"}
        padding={6}
        fontSize={"1.2rem"}
        color={"chocolate.100"}
        borderColor={"white"}
        borderWidth={2}
        borderRadius={15}
        focusBorderColor={"chocolate.100"}
        _hover={{ borderColor: "chocolate.100" }}
        _placeholder={{ color: "cinza.100" }}
      />
    </>
  );
};

export default TextAreaCustom;
