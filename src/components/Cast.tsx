import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Actor } from "../utils/interfaces";

interface Props {
  actors: Actor[];
}

function Cast({ actors }: Props) {
  return (
    <Flex w="100%" wrap="nowrap" overflowX="scroll">
      {actors.map((a) => (
        <Box
          key={a.id}
          mr="2"
          mb="2"
          minW="130px"
          borderRadius="md"
          bgColor="accent"
          color="black"
          textAlign="center"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500${a.profile_path}`}
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
          />
          <Flex alignItems="center" justify="center" h="50px">
            <Text>{a.name}</Text>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}

export default Cast;
