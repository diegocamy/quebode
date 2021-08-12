import { Flex, Image, Skeleton, Text } from "@chakra-ui/react";

interface Props {
  cover: string;
  title: string;
  loading?: boolean;
}

function MovieCard({ cover, title, loading }: Props) {
  return (
    <Flex direction="column" justify="center" align="center" mx="2">
      <Skeleton mb="1" borderRadius="md" isLoaded={!loading}>
        <Image
          src={cover}
          borderRadius="md"
          mb="1"
          width="170px"
          height="250px"
        />
      </Skeleton>
      <Skeleton isLoaded={!loading} width="120px" mb="1">
        <Text maxWidth="170px" w="100%" textAlign="center" mb="1">
          {title}
        </Text>
      </Skeleton>
    </Flex>
  );
}

export default MovieCard;
