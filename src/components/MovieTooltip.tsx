import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface Props {
  summary: string;
  rating: number;
  categories: string[];
  year: string;
}

function MovieTooltip({ rating, categories, summary, year }: Props) {
  return (
    <Box maxWidth="300px" width="fit-content" p="5" fontSize="md">
      <Text fontWeight="bold">Resumen:</Text>
      <Text>{summary.substr(0, 320)}...</Text>
      <Flex my="2">
        {categories &&
          categories.map((c, i) => (
            <Badge key={i} variant="solid" colorScheme="blackAlpha" mr="2">
              {c}
            </Badge>
          ))}
      </Flex>
      <Text>
        <span style={{ fontWeight: "bold", marginRight: 3 }}>Año: </span>
        {year}
      </Text>
      <Flex align="center">
        <Text fontWeight="bold" mr="2">
          Puntaje:
        </Text>
        <StarIcon color="yellow" mr="1" w="3" h="3" />
        <Text>{rating}</Text>
      </Flex>
    </Box>
  );
}

export default MovieTooltip;
