import { Box } from "@chakra-ui/react";

interface Prop {
  style?: React.CSSProperties;
}

const UnderlineBox = ({ style }: Prop) => {
  return (
    <>
      <Box
        style={style}
        borderTop={"1px solid transparent"}
        h={"1px"}
        borderRadius={1}
        borderColor={"chocolate.100"}
      ></Box>
    </>
  );
};

export default UnderlineBox;
