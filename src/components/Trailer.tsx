import { Box, Image } from "@chakra-ui/react";

interface Props {
  id: string;
}

function Trailer({ id }: Props) {
  return (
    <Box>
      <Image
        width="210px"
        borderRadius="md"
        src={`https://img.youtube.com/vi/${id}/0.jpg`}
      />
    </Box>
  );
}

export default Trailer;
