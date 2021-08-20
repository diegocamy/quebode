import { Flex, Button, Text } from "@chakra-ui/react";
import { RefetchOptions, QueryObserverResult } from "react-query";
import { MoviePreviewResponse } from "../utils/interfaces";

interface Props {
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<any, unknown>>;
}

function Error({ refetch }: Props) {
  return (
    <Flex direction="column" align="center">
      <Text>Ha ocurrido un error</Text>
      <Button bgColor="accent" color="white" onClick={() => refetch()}>
        Reintentar
      </Button>
    </Flex>
  );
}

export default Error;
