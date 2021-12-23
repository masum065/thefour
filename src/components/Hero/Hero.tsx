import { Image } from '@chakra-ui/image';
import { Box, Container, Grid } from '@chakra-ui/layout';
import { FC } from 'react';
import { Button } from '../utils/Button';

export const Hero: FC = () => {
  return (
    <Container maxW={['100%', 'lg']}>
      <Grid py='10' gap={2} templateColumns={['2fr 1fr', '1fr 1fr']}>
        <Box>
          <Image
            maxW={['100%', '500px']}
            src='/assets/images/THE-FESTIVAL-OF-URGENT-REINVENTIONS.png'
            alt='hero image'
          />

          {/* Navigator */}
          <Box
            display={['flex', 'block']}
            flexDir={['column', 'unset']}
            gap={['5px', '0']}
            mt='8'
          >
            <Button _hover={{ bgColor: 'primary' }} bgColor='primary' href='/'>
              The Lineup
            </Button>
            <Button href='/about'>About</Button>
            <Button href='/register'>Register</Button>
          </Box>
        </Box>
        <Box
          display='flex'
          justifyContent='flex-end'
          alignItems={['self-start', 'center']}
          h='100%'
          sx={{ ' video': { maxW: ['70%', '100%', '70%'] } }}
        >
          <video autoPlay loop muted>
            <source src='/assets/videos/graphic.mp4' type='video/mp4' />
          </video>
        </Box>
      </Grid>
    </Container>
  );
};
