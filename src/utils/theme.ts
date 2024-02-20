import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  lgx: "71em",
  xl: "80em",
  "2xl": "96em",
};

const Button = defineStyleConfig({
  variants: {
    primaryIcon: {
      borderRadius: "2rem",
      bgColor: "#361a0c",
      color: "#f7d10e",
      fontSize: "1.2rem",
      paddingY: "1.5rem",
    },
  },
});

const theme = extendTheme({breakpoints,
  colors: {
    amarelo: {
      100: "#f7d10e",
    },
    chocolate: {
      100: "#361a0c",
    },
    rosa: {
      100: "#e86082",
    },
  },
  components: {
    Button,
  },
});

export default theme;
