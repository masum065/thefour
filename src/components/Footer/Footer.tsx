import { Box } from '@chakra-ui/react';
import { Brand } from './Brand/Brand';
import { Declaimer } from './Declaimer/Declaimer';
import { FooterMenu } from './FooterMenu/FooterMenu';
import { Social } from './Social/Social';

export const Footer = () => {
  return (
    <Box bgColor='black'>
      <Brand />
      <Social />
      <FooterMenu />
      <Declaimer />
    </Box>
  );
};
