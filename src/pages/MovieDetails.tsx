import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Skeleton,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import SpinnerComponent from "../components/Spinner";
import { MovieDetails as MovieDetailsInterface } from "../utils/interfaces";

interface Params {
  id: string;
}

function MovieDetails() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { id } = useParams<Params>();
  const fetchMovieDetails = async () =>
    await (await fetch(`/api/movies/movie/${id}`)).json();
  const { data, isLoading, error, refetch } = useQuery<MovieDetailsInterface>(
    id,
    fetchMovieDetails
  );

  console.log(JSON.stringify(data, null, 2));

  if (!data && error) {
    return (
      <Flex>
        <Heading size="md">Ha ocurrido un error</Heading>
        <Button bgColor="accent" color="black" onClick={() => refetch()}>
          Reintentar
        </Button>
      </Flex>
    );
  }

  if (!data && isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <Box maxWidth="1200px" w="100%" m="auto" py="10">
      <Flex direction={isMobile ? "column" : "row"}>
        <Image
          maxWidth={isMobile ? "100%" : "400px"}
          maxH={isMobile ? "350px" : "600px"}
          objectFit={isMobile ? "contain" : "cover"}
          h="100%"
          width="100%"
          borderRadius="md"
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          mr="4"
        />
        <Box mr="2" p={isMobile ? "3" : ""}>
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
          {data?.homepage && (
            <Box my="2">
              <Text mr="2" display="inline" fontWeight="bold" fontSize="md">
                Sitio Oficial:{" "}
              </Text>
              <Link fontSize="md" display="inline" href={data.homepage}>
                {data.homepage}
              </Link>
            </Box>
          )}
          <Text mr="2" display="inline" fontWeight="bold" fontSize="md">
            Duración:{" "}
          </Text>
          <Text fontSize="md" display="inline">
            {data?.runtime} minutos.
          </Text>
          <Text fontWeight="bold" fontSize="md" my="2">
            Productoras:{" "}
          </Text>
          <Flex flexWrap="wrap" my="5" justifyContent="flex-start">
            {data?.production_companies.map((p) => {
              if (!p.logo_path) return null;

              return (
                <Flex
                  justify="center"
                  align="center"
                  flexDirection="column"
                  key={p.id}
                  m="2"
                >
                  <Image
                    w="60px"
                    h="60px"
                    src={`https://image.tmdb.org/t/p/w200/${p.logo_path}`}
                    mr="2"
                    mb="2"
                    objectFit="contain"
                    alt={p.name}
                  />
                  <Text fontSize="sm">{p.name}</Text>
                </Flex>
              );
            })}
          </Flex>
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
            alignItems="center"
          >
            {data?.trailers.map((t) => {
              return (
                <AspectRatio width="290px" ratio={16 / 9} mr="2" mb="2">
                  <iframe
                    width="300"
                    src={`https://www.youtube.com/embed/${t.key}`}
                    title={t.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </AspectRatio>
              );
            })}
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default MovieDetails;
