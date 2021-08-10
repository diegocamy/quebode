import {
  Flex,
  Box,
  useMediaQuery,
  Heading,
  Text,
  Select,
} from "@chakra-ui/react";
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
      textAlign="center"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgGradient="linear(to-b, rgba(0,0,0,0.6), background)"
      />
      <Heading zIndex="2" fontSize={isMobile ? "3xl" : "6xl"}>
        Buscando algo para ver?
      </Heading>
      <Text zIndex="2" fontSize={isMobile ? "md" : "xl"}>
        Encontrá peliculas para mirar YAAAAA
      </Text>
      <Select
        placeholder="Búsqueda rápida por género"
        maxWidth="450px"
        textAlign="center"
        mt="5"
        bgColor="white"
        color="black"
        borderRadius="3xl"
        border="3px solid red"
        mx="2"
      >
        {/* TODO: options with film genres */}
      </Select>
    </Flex>
  );
}

export default Hero;
