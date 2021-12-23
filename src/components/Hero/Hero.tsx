import { Image } from '@chakra-ui/image';
import { Box, Container, Grid } from '@chakra-ui/layout';
import { FC } from 'react';
import { Button } from '../utils/Button';

export const Hero: FC = () => {
  return (
    <Container maxW='lg'>
      <Grid py='10' gap={2} templateColumns='1fr 1fr'>
        <Box>
          <Image
            maxW='500px'
            src='/assets/images/THE-FESTIVAL-OF-URGENT-REINVENTIONS.png'
          />

          {/* Navigator */}
          <Box mt='8'>
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
          alignItems='center'
          h='100%'
          sx={{ ' video': { maxW: '70%' } }}
        >
          <video autoPlay loop muted>
            <source src='/assets/videos/graphic.mp4' type='video/mp4' />
          </video>
        </Box>
      </Grid>
    </Container>
  );
};
