import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar() {
  const [value, setValue] = useState("");
  const [isMobile] = useMediaQuery("(max-width:786px)");
  const history = useHistory();
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
      <Flex
        maxWidth="1300px"
        w="100%"
        justify="space-between"
        px="2"
        align="center"
      >
        <Heading
          color="accent"
          as={NavLink}
          to="/"
          fontSize={isMobile ? "lg" : "3xl"}
        >
          QueBode
        </Heading>
        <InputGroup width={isMobile ? "200px" : "fit-content"}>
          <InputRightElement
            children={<Search2Icon color="green" />}
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              if (value) {
                history.push(`/search?${value}`);
                setValue("");
              }
            }}
          />
          <Input
            placeholder="buscar"
            border="2px"
            type="text"
            borderColor="green"
            borderRadius="2xl"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && value) {
                history.push(`/search?${value}`);
                setValue("");
              }
            }}
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
}

export default NavBar;
