import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./utils/Route";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./utils/theme";

function App() {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraBaseProvider>
    </>
  );
}

export default App;
