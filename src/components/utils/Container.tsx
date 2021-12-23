import { Flex, useColorMode, FlexProps } from '@chakra-ui/react';

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'black' };

  const color = { light: 'black', dark: 'white' };
  return (
    <Flex
      direction='column'
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
