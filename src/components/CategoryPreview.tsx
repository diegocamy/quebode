import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { MoviePreviewResponse } from "../utils/interfaces";
import Error from "./Error";
import MovieCard from "./MovieCard";

interface Props {
  header: string;
  fetchUrl: string;
  numberOfMovies?: number;
  showAllLink?: boolean;
  centeredHeader?: boolean;
  headerSize?: "sm" | "md" | "lg" | "xl";
}

function CategoryPreview({
  fetchUrl,
  header,
  numberOfMovies = 12,
  showAllLink = true,
  centeredHeader = true,
  headerSize = "lg",
}: Props) {
  const fetchCategory = async () => await (await fetch(fetchUrl)).json();
  const { data, error, isLoading, refetch } = useQuery<MoviePreviewResponse>(
    header,
    fetchCategory
  );

  const dummy = [];
  for (let i = 0; i < numberOfMovies; i++) {
    dummy.push("_");
  }

  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      py="3"
      maxWidth="1200px"
      w="100%"
      m="auto"
    >
      <Heading
        mb="6"
        alignSelf={centeredHeader ? "center" : "flex-start"}
        size={headerSize}
      >
        {header}
      </Heading>
      <Flex justify="center" align="flex-start" flexWrap="wrap" width="100%">
        {!data && isLoading && (
          <>
            {dummy.map((d, i) => (
              <MovieCard
                key={i}
                cover="#"
                title="_"
                rating={0}
                id={0}
                genres={[]}
                summary="#"
                year="#"
                loading
              />
            ))}
          </>
        )}
        {data?.results.slice(0, numberOfMovies).map((m) => (
          <MovieCard
            key={m.id}
            title={m.title}
            cover={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
            rating={m.vote_average}
            id={m.id}
            genres={m.genres}
            summary={m.overview}
            year={m.release_date.split("-")[0]}
          />
        ))}
        {error && !isLoading && <Error refetch={refetch} />}
        {data && !isLoading && showAllLink && (
          <Flex justify="flex-end" width="100%" maxWidth="1200px">
            <Text
              textTransform="uppercase"
              as={Link}
              to={`/category/${header.toLowerCase()}`}
              fontSize="xl"
              mr="5"
            >
              Ver todas las {header} &gt;
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default CategoryPreview;
