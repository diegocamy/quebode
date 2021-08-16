import { Box, Flex, Image, Skeleton, Text, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MovieTooltip from "./MovieTooltip";

interface Props {
  id: number;
  cover: string;
  title: string;
  genres: string[];
  rating: number;
  summary: string;
  year: string;
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
  year,
}: Props) {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      mx="2"
      position="relative"
      as={Link}
      to={`/movie/${id}`}
    >
      <Skeleton mb="1" borderRadius="md" isLoaded={!loading}>
        <Tooltip
          label={
            <MovieTooltip
              summary={summary}
              categories={genres}
              rating={rating}
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
      <Skeleton isLoaded={!loading} width="160px" mb="1">
        <Text w="100%" mb="1" textAlign="center">
          {title}
        </Text>
      </Skeleton>
    </Flex>
  );
}

export default MovieCard;
