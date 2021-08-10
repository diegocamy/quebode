import { Flex, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Flex
      justify="center"
      align="center"
      position="sticky"
      top="0"
      backgroundColor="dark"
      height="55px"
      as={NavLink}
      to="/"
      replace
    >
      <Heading color="accent">QueBode</Heading>
    </Flex>
  );
}

export default NavBar;
