import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import CategoryPreview from "../components/CategoryPreview";
import Hero from "../components/Hero";

function Home() {
  const history = useHistory();
  const [value, setValue] = useState("");

  return (
    <div>
      <Helmet>
        <title>Que Bode - Inicio</title>
        <meta
          name="description"
          content="Encontrá películas para mirar rápido y sin publicidades"
        />
      </Helmet>
      <Hero />
      <CategoryPreview
        header="Populares"
        fetchUrl="/api/movies/discover"
        headerSize="lg"
      />
      <CategoryPreview
        header="Tendencias"
        fetchUrl="/api/movies/trending"
        headerSize="lg"
      />
      <Flex
        justify="center"
        align="center"
        height="250px"
        bgColor="dark"
        direction="column"
        px="5"
        textAlign="center"
      >
        <Heading>Buscando por alguna película en particular?</Heading>
        <Text mb="3">Probá realizando una búsqueda por nombre</Text>
        <InputGroup maxW="500px" w="100%" mb="2">
          <InputRightElement
            children={<Search2Icon color="green" />}
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              if (value) {
                history.push(`/search?${value}`);
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
              }
            }}
          />
        </InputGroup>
      </Flex>
    </div>
  );
}

export default Home;
