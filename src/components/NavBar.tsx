import { HStack, Image, Text } from "@chakra-ui/react";
import log from "../assets/Logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={log} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
