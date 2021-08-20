import { Box, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function Search() {
  const { search } = useLocation();
  console.log(search);
  return (
    <Box minHeight="89vh" h="100%" maxWidth="1200px" m="auto">
      <Heading my="4" mx="auto" textAlign="center">
        Buscar
      </Heading>
    </Box>
  );
}

export default Search;
