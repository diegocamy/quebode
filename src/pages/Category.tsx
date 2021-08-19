import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import PaginationButtons from "../components/PaginationButtons";
import SpinnerComponent from "../components/Spinner";
import { genres } from "../utils/genres";
import { MoviePreviewResponse } from "../utils/interfaces";

interface Params {
  categoria: string;
}

function generateString(categoria: string): string {
  switch (categoria) {
    case "populares":
      return "/api/movies/discover?page=";

    case "tendencias":
      return "/api/movies/trending?page=";

    default:
      return `/api/movies/category/${genres.find(
        (g) => g.name.toLowerCase() === "categoria"
      )}`;
  }
}

const fetchCategory = async (categoria: string, page: number) =>
  await (await fetch(generateString(categoria) + page)).json();

function Category() {
  const { categoria } = useParams<Params>();
  const client = useQueryClient();
  const [page, setPage] = useState(1);

  const { data, error, isLoading, refetch, isFetching } =
    useQuery<MoviePreviewResponse>(
      [categoria, page],
      (context) => fetchCategory(categoria, page),
      {
        keepPreviousData: true,
        staleTime: 5000,
      }
    );

  useEffect(() => {
    if (data) {
      setPage(data.page);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.total_pages > page) {
      client.prefetchQuery(["projects", page + 1], () =>
        fetchCategory(categoria, page + 1)
      );
    }
  }, [data, page, client]);

  if (!data && isLoading) return <SpinnerComponent />;

  return (
    <Box maxWidth="1200px" w="100%" m="auto">
      {error && !isLoading && (
        <Flex direction="column" align="center">
          <Text>Ha ocurrido un error</Text>
          <Button bgColor="accent" color="white" onClick={() => refetch()}>
            Reintentar
          </Button>
        </Flex>
      )}
      <Heading textTransform="capitalize" textAlign="center" my="6">
        {categoria}
      </Heading>
      <Flex
        justify="center"
        flexWrap="wrap"
        maxWidth="1000px"
        align="flex-start"
        w="100%"
        m="auto"
      >
        {data?.results.map((m) => (
          <MovieCard
            key={m.id}
            title={m.title}
            cover={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
            rating={m.vote_average}
            id={m.id}
            genres={m.genres}
            summary={m.overview}
            year={m.release_date && m.release_date.split("-")[0]}
            mb="4"
          />
        ))}
      </Flex>
      <PaginationButtons
        page={data!.page}
        last_page={data!.total_pages}
        setPage={setPage}
      />
    </Box>
  );
}

export default Category;
