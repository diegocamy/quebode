import { Box, Button, Flex, Heading, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import PaginationButtons from "../components/PaginationButtons";
import SpinnerComponent from "../components/Spinner";
import { genres } from "../utils/genres";
import { MoviePreviewResponse, SortBy } from "../utils/interfaces";

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
      return `/api/movies/discover/?with_genres=${
        genres.find((g) => g.name.toLowerCase() === categoria)?.id
      }&page=`;
  }
}

const fetchCategory = async (
  categoria: string,
  page: number,
  order: SortBy | string
) =>
  await (
    await fetch(generateString(categoria) + page + "&sort_by=" + order)
  ).json();

function Category() {
  const { categoria } = useParams<Params>();
  const client = useQueryClient();
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState<SortBy | string>("popularity.desc");

  const { data, error, isLoading, refetch } = useQuery<MoviePreviewResponse>(
    [categoria, page, order],
    (context) => fetchCategory(categoria, page, order),
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
      client.prefetchQuery(["projects", page + 1, order], () =>
        fetchCategory(categoria, page + 1, order)
      );
    }
  }, [data, page, client, categoria, order]);

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
      <Select
        m="auto"
        mb="6"
        width="fit-content"
        bg="accent"
        borderColor="accent"
        color="black"
        onChange={(e) => setOrder(e.target.value)}
      >
        <option value="popularity.desc">Popularidad Desc</option>
        <option value="popularity.asc">Popularidad Asc</option>
        <option value="release_date.desc">Lanzamiento Desc</option>
        <option value="release_date.asc">Lanzamiento Asc</option>
      </Select>
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
