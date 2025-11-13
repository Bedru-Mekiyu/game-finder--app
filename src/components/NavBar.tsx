import { HStack, Image } from "@chakra-ui/react";
import log from "../assets/Logo.webp";
import { ColorSwitchMode } from "./ColorSwitchMode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={log} boxSize="60px" />

      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
