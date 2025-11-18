import { HStack, Image } from "@chakra-ui/react";
import log from "../assets/Logo.webp";
import { ColorSwitchMode } from "./ColorSwitchMode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={log} boxSize="60px" />
      <SearchInput />
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
