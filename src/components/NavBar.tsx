import { HStack, Image } from "@chakra-ui/react";
import log from "../assets/Logo.webp";
import { ColorSwitchMode } from "./ColorSwitchMode";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={log} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
