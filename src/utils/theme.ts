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

export const colors = {
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
    25: "#bababa",
  },
  branco: {
    100: "#f6f6f6",
    50: "#F2F2F2",
  },
};

const Heading = defineStyleConfig({
  variants: {
    titulo: {
      color: "#361a0c",
      fontSize: ["25px", "28px", "39px"],
    },
    subtitulo: {
      color: "#361a0c",
      fontSize: ["16px", "16px", "20px"]
    }
  },
});

const Text = defineStyleConfig({
  baseStyle: {
    fontSize: "16px",
  },
  variants: {
    texto: {
      color: "#361a0c",
    },
  },
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

const SectionContainer = defineStyleConfig({
  baseStyle: {
    padding: "6rem 1rem",
  },
  variants: {
    secondary: {
      bgColor: "#f2f2f2"
    }
  }
});

const theme = extendTheme({
  breakpoints,
  colors,
  fonts: {
    body: "Roboto, sans-serif",
    Heading: "Roboto, sans-serif",
  },
  components: {
    Button,
    Text,
    Heading,
    SectionContainer,
  },
});

export default theme;
