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

const Heading = defineStyleConfig({
  variants: {
    titulo: {
      color: "#361a0c",
      fontSize: ["25px","28px","28px"]

    },
  },
});

const Text = defineStyleConfig({
  baseStyle: {
    fontSize: "16px",
  },
  variants: {
    texto: {
      color: "#361a0c",
    }
  }
});

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

const theme = extendTheme({
  breakpoints,
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
    cinza: {
      100: "#54595f",
      50: "#8d8d8d",
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
    Heading: "Roboto, sans-serif",
  },
  components: {
    Button,
    Text,
    Heading
  },
});

export default theme;
