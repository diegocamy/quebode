import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { Redirect, useParams } from "react-router-dom";
import Cast from "../components/Cast";
import CategoryPreview from "../components/CategoryPreview";
import Error from "../components/Error";
import Providers from "../components/Providers";
import SpinnerComponent from "../components/Spinner";
import Trailer from "../components/Trailer";
import { MovieDetails as MovieDetailsInterface } from "../utils/interfaces";
import { minutesToHours } from "../utils/minutesToHours";

interface Params {
  id: string;
}

function MovieDetails() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { id } = useParams<Params>();
  const fetchMovieDetails = async () =>
    await (await fetch(`/api/movies/movie/${id}`)).json();
  const { data, isLoading, error, refetch, isFetched } =
    useQuery<MovieDetailsInterface>(id, fetchMovieDetails);

  if (!data && error) {
    return <Error refetch={refetch} />;
  }

  if (!data && isLoading) {
    return <SpinnerComponent />;
  }

  if (isFetched && !data?.id) {
    return <Redirect to="/404" />;
  }

  return (
    <Box maxWidth="1200px" w="100%" m="auto" py="10">
      <Flex direction={isMobile ? "column" : "row"}>
        <Image
          maxWidth={isMobile ? "100%" : "35%"}
          maxH={isMobile ? "350px" : "600px"}
          objectFit={isMobile ? "contain" : "cover"}
          h="100%"
          width="100%"
          borderRadius="md"
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          mr="8"
        />
        <Box mr="2" p={isMobile ? "3" : ""} w={isMobile ? `100%` : "60%"}>
          <Heading>{data?.title}</Heading>
          <Text fontWeight="normal" fontSize="md" mb="2">
            {data?.tagline}
          </Text>
          {data?.genres.map((g) => (
            <Badge
              key={g.id}
              variant="solid"
              colorScheme="blackAlpha"
              mr="2"
              mb="2"
              fontSize="md"
              px="2"
              bgColor="accent"
              color="black"
            >
              {g.name === "Suspense" ? "Suspenso" : g.name}
            </Badge>
          ))}
          <Text fontSize="xl">
            <Text
              display="inline-block"
              as="span"
              fontWeight="bold"
              mr="2"
              mb="3"
            >
              Año:{" "}
            </Text>
            {data?.release_date.split("-")[0]}
          </Text>
          <Text fontWeight="bold" fontSize="md">
            Resumen:{" "}
          </Text>
          <Text fontSize="md">{data?.overview}</Text>
          {data?.homepage && data.homepage.includes("netflix") ? (
            <Button
              bgColor="red.600"
              color="white"
              as={Link}
              href={data.homepage}
              mt="2"
              _hover={{ bgColor: "red.700", textDecoration: "none" }}
            >
              Ver en NETFLIX
            </Button>
          ) : (
            <Box my="2">
              <Text mr="2" display="inline" fontWeight="bold" fontSize="md">
                Sitio Oficial:{" "}
              </Text>
              <Link fontSize="md" display="inline" href={data!.homepage}>
                {data!.homepage}
              </Link>
            </Box>
          )}
          <Box my="2">
            <Text mr="2" display="inline" fontWeight="bold" fontSize="md">
              Duración:{" "}
            </Text>
            <Text fontSize="md" display="inline">
              {minutesToHours(data!.runtime)}
            </Text>
          </Box>
          <Text mb="2"></Text>

          <Text fontWeight="bold" mt="2">
            Elenco:{" "}
          </Text>
          <Cast actors={data!.cast} />
        </Box>
      </Flex>
      {data!.trailers.length > 0 && (
        <Box p={isMobile ? "3" : ""}>
          <Heading size="md" my="4">
            Trailers
          </Heading>
          <Flex
            flexWrap="wrap"
            direction={isMobile ? "column" : "row"}
            justify={isMobile ? "center" : "space-evenly"}
          >
            {data?.trailers.slice(0, 5).map((t) => {
              return <Trailer key={t.id} id={t.id} title={t.original_title} />;
            })}
          </Flex>
        </Box>
      )}
      <Providers
        loading={isLoading}
        providers={data!.proveedores}
        title={data!.title}
      />
      <CategoryPreview
        fetchUrl={`/api/movies/similar/${id}`}
        header="Peliculas similares"
        numberOfMovies={12}
        showAllLink={false}
        centeredHeader={false}
        headerSize="md"
      />
    </Box>
  );
}

export default MovieDetails;
