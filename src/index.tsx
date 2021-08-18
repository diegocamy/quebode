import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/karla";
import "@fontsource/rubik";

const theme = extendTheme({
  colors: {
    dark: "#040F0F",
    green: "#299639",
    accent: "#33ca58",
    background: "#2D3A3A",
    whiteish: "#FCFFFC",
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "background",
        color: "whiteish",
      },
    },
  },
  fonts: {
    heading: "Rubik",
    body: "Karla",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
