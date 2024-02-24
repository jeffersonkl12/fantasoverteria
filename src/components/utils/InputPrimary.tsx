import { Input } from "@chakra-ui/react";

interface Prop {
  holder?: string;
  type?: string;
  style?: React.CSSProperties;
  name?: string;
  value?: any;
  isRequerid?: boolean;
}

const InputPrimary = ({
  holder,
  style,
  type,
  name,
  value,
  isRequerid = false,
}: Prop) => {
  return (
    <>
      <Input
        name={name}
        value={value}
        required={isRequerid}
        type={type}
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

export default InputPrimary;
