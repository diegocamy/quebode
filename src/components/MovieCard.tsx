import { Box, Flex, Image, Skeleton, Text, Tooltip } from "@chakra-ui/react";
import MovieTooltip from "./MovieTooltip";

interface Props {
  id: number;
  cover: string;
  title: string;
  genres: string[];
  rating: number;
  runtime: number;
  summary: string;
  year: number;
  loading?: boolean;
}

function MovieCard({
  cover,
  title,
  loading,
  summary,
  id,
  genres,
  rating,
  runtime,
  year,
}: Props) {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      mx="2"
      position="relative"
    >
      <Skeleton mb="1" borderRadius="md" isLoaded={!loading}>
        <Tooltip
          label={
            <MovieTooltip
              summary={summary}
              categories={genres}
              rating={rating}
              runtime={runtime}
              year={year}
            />
          }
          as={Box}
          bgColor="green"
          placement="auto"
          hasArrow
        >
          <Image
            src={cover}
            borderRadius="md"
            mb="1"
            width="170px"
            height="250px"
          />
        </Tooltip>
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
