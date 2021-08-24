import { Search2Icon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import SpinnerComponent from "../components/Spinner";
import { MoviePreviewResponse } from "../utils/interfaces";
import Error from "../components/Error";
import PaginationButtons from "../components/PaginationButtons";

const fetchSearch = async (search: string, page: number) =>
  await (
    await fetch(`/api/movies/search/?query=${search}&page=${page}`)
  ).json();

function Search() {
  const { search } = useLocation();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState(
    search.slice(1, search.length)
  );
  const { data, error, isLoading, refetch, isFetched } =
    useQuery<MoviePreviewResponse>(
      [search, page],
      (context) => fetchSearch(search, page),
      { enabled: search.length > 0 }
    );

  useEffect(() => {
    setSearchValue(search.slice(1, search.length));
  }, [search]);

  useEffect(() => {
    document.title = `Que Bode - Buscar`;
  }, []);

  if (!data && isLoading) return <SpinnerComponent />;

  return (
    <Box minHeight="87.5vh" h="100%" maxWidth="1200px" m="auto">
      <Heading my="4" mx="auto" textAlign="center">
        Buscar
      </Heading>

      <Flex justify="center" mb={"10"} px="3">
        <Input
          placeholder="Buscar películas..."
          bg="white"
          color="black"
          maxW="550px"
          w="100%"
          borderTopRightRadius="none"
          borderBottomRightRadius="none"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              history.push(`/search?${searchValue}`);
            }
          }}
        />
        <IconButton
          aria-label="search"
          icon={<Search2Icon />}
          bg="accent"
          color="white"
          borderTopLeftRadius="none"
          borderBottomLeftRadius="none"
          width="60px"
          _hover={{ bg: "green" }}
          onClick={() => history.push(`/search?${searchValue}`)}
        />
      </Flex>
      {isFetched && error ? (
        <Error refetch={refetch} />
      ) : data && data.results.length > 0 ? (
        <>
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
                cover={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
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
        </>
      ) : (
        <Box py="6" textAlign="center">
          <Text fontSize="xl">
            {search.slice(1, search.length)
              ? `No hay resultados para ${search.slice(1, search.length)}`
              : "Ingresá el nombre de una película para ver resultados"}
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default Search;
