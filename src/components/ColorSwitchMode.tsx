import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ColorSwitchMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">dark mode</Text>
    </HStack>
  );
};
