import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { Proveedor } from "../utils/interfaces";

interface Props {
  title: string;
  providers: Proveedor[];
  loading: boolean;
}

function Providers({ title, loading, providers }: Props) {
  return (
    <Box my="4" px="4">
      <Heading size="md">Dónde mirar {title}?</Heading>
      <Text mb="4">Podés encontrar {title} en los siguientes sitios web:</Text>
      <Flex flexWrap="wrap" justify="center">
        {providers.map((p) => {
          return (
            <Skeleton isLoaded={!loading}>
              <Button
                as={Link}
                href={p.enlace}
                bgGradient="linear(to-l, green, accent)"
                color="black"
                w="250px"
                h="100px"
                fontSize="2xl"
                m="1"
                target="_blank"
                _hover={{
                  bgGradient: "linear(to-l, accent,dark)",
                  textDecor: "none",
                  color: "white",
                }}
              >
                {p.nombre.toUpperCase()}
              </Button>
            </Skeleton>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Providers;
