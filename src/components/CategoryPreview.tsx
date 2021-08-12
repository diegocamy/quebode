import { Flex, Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { Response } from "../utils/interfaces";
import MovieCard from "./MovieCard";

interface Props {
  header: string;
  fetchUrl: string;
}

function CategoryPreview({ fetchUrl, header }: Props) {
  const fetchCategory = async () => await (await fetch(fetchUrl)).json();
  const { data, error, isLoading } = useQuery<Response>(header, fetchCategory);

  if (error) return <p>error</p>;

  console.log(
    data?.data.movies.map((m) => {
      return {
        id: m.id,
        title: m.title,
        duration: m.runtime,
      };
    })
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
      <Flex
        justify="space-evenly"
        align="flex-start"
        flexWrap="wrap"
        width="100%"
      >
        {!data && isLoading && (
          <>
            <MovieCard cover="_" title="_" loading />
            <MovieCard cover="_" title="_" loading />
            <MovieCard cover="_" title="_" loading />
            <MovieCard cover="_" title="_" loading />
            <MovieCard cover="_" title="_" loading />
          </>
        )}
        {data?.data.movies.map((m) => (
          <MovieCard key={m.id} title={m.title} cover={m.medium_cover_image} />
        ))}
      </Flex>
    </Flex>
  );
}

export default CategoryPreview;
