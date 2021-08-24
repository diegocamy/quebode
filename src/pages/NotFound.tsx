import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import { useHistory } from "react-router";
import notFound from "../assets/404.svg";
import { Helmet } from "react-helmet";

function NotFound() {
  const history = useHistory();

  return (
    <Flex
      justify="center"
      align="center"
      minHeight="85vh"
      h="100%"
      position="relative"
      direction="column"
    >
      <Helmet>
        <title>Que Bode - Página no encontrada</title>
        <meta
          name="description"
          content="Encontrá películas para mirar rápido y sin publicidades"
        />
      </Helmet>
      <Image src={notFound} alt="Page not found" maxW="400px" w="100%" mb="6" />
      <Heading>Página no encontrada</Heading>
      <Button
        size="lg"
        onClick={() => {
          history.push("/");
        }}
        my="3"
        maxW="300px"
        w="100%"
        bgColor="accent"
        color="black"
        _hover={{ bgColor: "green" }}
      >
        Volver
      </Button>
    </Flex>
  );
}

export default NotFound;
