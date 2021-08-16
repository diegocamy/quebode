import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CategoryPreview from "../components/CategoryPreview";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <CategoryPreview header="Populares" fetchUrl="/api/movies/discover" />
      <CategoryPreview header="Tendencias" fetchUrl="/api/movies/trending" />
      <Flex
        justify="center"
        align="center"
        height="250px"
        bgColor="dark"
        direction="column"
      >
        <Heading>Aún no encontrás nada?</Heading>
        <Text mb="3">Probá realizar una búsqueda avanzada</Text>
        <Button
          color="black"
          bgColor="accent"
          size="lg"
          width="250px"
          as={Link}
          to={"/buscar"}
        >
          Búsqueda Avanzada
        </Button>
      </Flex>
    </div>
  );
}

export default Home;
