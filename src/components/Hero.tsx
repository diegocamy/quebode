import {
  Flex,
  Box,
  useMediaQuery,
  Heading,
  Text,
  Select,
} from "@chakra-ui/react";
import movies from "../assets/movies.jpg";
import { genres } from "../utils/genres";
import { useHistory } from "react-router-dom";

function Hero() {
  const [isMobile] = useMediaQuery("(max-width:786px)");
  const history = useHistory();
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height={isMobile ? "350px" : "450px"}
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
        Encontrá peliculas para mirar rápidamente y sin publicidades
      </Text>
      <Select
        placeholder="Búsqueda rápida por género"
        maxWidth="450px"
        textAlign="center"
        mt="5"
        bgColor="white"
        fontSize="lg"
        color="black"
        borderRadius="3xl"
        border="3px solid"
        borderColor="accent"
        mx="2"
        px="1"
        onChange={(e) =>
          history.push(`/category/${e.target.value.toLowerCase()}`)
        }
      >
        {genres.map((g) => (
          <option value={g.name} key={g.id}>
            {g.name}
          </option>
        ))}
      </Select>
    </Flex>
  );
}

export default Hero;
