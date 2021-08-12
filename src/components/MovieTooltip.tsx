import { Badge, Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  summary: string;
  rating: number;
  categories: string[];
  runtime: number;
}

function MovieTooltip({ rating, runtime, categories, summary }: Props) {
  return (
    <Box maxWidth="200px" width="fit-content">
      <Text>{summary}</Text>
      <Flex>
        {categories &&
          categories.map((c, i) => (
            <Badge variant="solid" colorScheme="green">
              {c}
            </Badge>
          ))}
      </Flex>
      <Text>Puntaje: {rating}</Text>
      <Text>Duracion: {runtime}</Text>
    </Box>
  );
}

export default MovieTooltip;
