import { Flex, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      justify="center"
      align="center"
      bgColor="green"
      color="white"
      height="50px"
    >
      <Text>
        Powered by{" "}
        <Link
          href="https://www.themoviedb.org/"
          target="_blank"
          fontWeight="bold"
        >
          THEMOVIEDB
        </Link>
      </Text>
    </Flex>
  );
}

export default Footer;
