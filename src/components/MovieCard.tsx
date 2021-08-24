import { Box, Flex, Image, Skeleton, Text, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MovieTooltip from "./MovieTooltip";
import movie from "../assets/movie.png";

interface Props {
  id: number;
  cover: string;
  title: string;
  genres: string[];
  rating: number;
  summary: string;
  year: string;
  loading?: boolean;
  mb?: string;
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
  mb = "0",
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
      mb={mb}
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
            src={cover.includes("null") ? movie : cover}
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
