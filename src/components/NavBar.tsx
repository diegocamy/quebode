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
      zIndex="3"
    >
      <Heading color="accent" as={NavLink} to="/">
        QueBode
      </Heading>
    </Flex>
  );
}

export default NavBar;
