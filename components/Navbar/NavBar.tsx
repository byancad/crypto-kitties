import { Flex } from "@chakra-ui/react";

import Connect from "./Connect";

export const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      borderBottom={"1px solid grey"}
      w="100%"
      p={4}
    >
      <Connect />
    </Flex>
  );
};
