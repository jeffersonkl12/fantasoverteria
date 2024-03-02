import { Box, ThemingProps, useStyleConfig } from "@chakra-ui/react";

interface Prop {
    children?: React.ReactNode;
    variant?: ThemingProps<any>;
}

const SectionContainer = ({variant,children}: Prop) => {

    const style = useStyleConfig("SectionContainer",variant);

    return (
        <Box __css={style}>
            {children}
        </Box>
    );
};

export default SectionContainer;