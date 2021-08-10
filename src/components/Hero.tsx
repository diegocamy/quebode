import { Flex, Box, useMediaQuery } from "@chakra-ui/react";
import movies from "../assets/movies.jpg";

function Hero() {
  const [isMobile] = useMediaQuery("(max-width:786px)");
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height={isMobile ? "450px" : "650px"}
      backgroundImage={movies}
      backgroundPosition="center"
      backgroundSize="cover"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex="1"
        bgGradient="linear(to-b, rgba(0,0,0,0.3), background)"
      />
    </Flex>
  );
}

export default Hero;
