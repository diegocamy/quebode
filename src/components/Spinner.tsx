import { Flex, Spinner } from "@chakra-ui/react";

function SpinnerComponent() {
  return (
    <Flex justify="center" align="center" height="90vh">
      <Spinner color="accent" size="xl" thickness="3px" />
    </Flex>
  );
}

export default SpinnerComponent;
