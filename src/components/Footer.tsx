import { Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      justify="center"
      align="center"
      bgColor="green"
      color="white"
      height="50px"
    >
      <Text>Powered by THEMOVIEDB</Text>
    </Flex>
  );
}

export default Footer;
