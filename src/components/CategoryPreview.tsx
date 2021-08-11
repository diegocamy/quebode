import { Flex, Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { Response } from "../utils/interfaces";

interface Props {
  header: string;
  fetchUrl: string;
}

function CategoryPreview({ fetchUrl, header }: Props) {
  const fetchCategory = async () => await (await fetch(fetchUrl)).json();
  const { data, error, isLoading } = useQuery<Response>(header, fetchCategory);

  if (!data && isLoading) return <p>loading.....</p>;

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
    <Flex justify="center" align="center" direction="column" py="3">
      <Heading>{header}</Heading>
      <Flex justify="center" align="center" flexWrap="wrap">
        {JSON.stringify(data, null, 2)}
      </Flex>
    </Flex>
  );
}

export default CategoryPreview;
