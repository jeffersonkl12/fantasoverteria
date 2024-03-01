import { Box, Image } from "@chakra-ui/react";

interface ImageBoxItem {
  style?: React.CSSProperties;
  src?: string;
}

const ImageBoxItem = ({ src, style }: ImageBoxItem) => {
  return (
    <>
      <Box style={style} h={"80vh"} objectFit={"fill"}>
        <Image src={src} />
      </Box>
    </>
  );
};

export default ImageBoxItem;
