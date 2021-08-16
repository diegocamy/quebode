import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { MoviePreviewResponse } from "../utils/interfaces";
import MovieCard from "./MovieCard";

interface Props {
  header: string;
  fetchUrl: string;
}

const dummy = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

function CategoryPreview({ fetchUrl, header }: Props) {
  const fetchCategory = async () => await (await fetch(fetchUrl)).json();
  const { data, error, isLoading, refetch } = useQuery<MoviePreviewResponse>(
    header,
    fetchCategory
  );

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
      <Heading mb="6">{header}</Heading>
      <Flex justify="center" align="flex-start" flexWrap="wrap" width="100%">
        {!data && isLoading && (
          <>
            {dummy.map((d, i) => (
              <MovieCard
                key={i}
                cover="_"
                title="_"
                rating={0}
                id={0}
                genres={[]}
                summary="_"
                year="_"
                loading
              />
            ))}
          </>
        )}
        {data?.results.slice(0, 12).map((m) => (
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
        {error && !isLoading && (
          <Flex direction="column" align="center">
            <Text>Ha ocurrido un error</Text>
            <Button bgColor="accent" color="white" onClick={() => refetch()}>
              Reintentar
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default CategoryPreview;
