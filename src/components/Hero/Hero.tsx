import { useDisclosure } from '@chakra-ui/hooks';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Box, Container, Grid } from '@chakra-ui/layout';
import { Button } from '../utils/Button';
import { useHasMounted } from '../utils/hasMounted';

export const Hero = () => {
  const hasMounted = useHasMounted();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  if (!hasMounted) {
    return null;
  }
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
            display={['none', 'block']}
            flexDir={['column', 'unset']}
            gap={['5px', '0']}
            mt='8'
          >
            <Button
              _hover={{ bgColor: 'primary' }}
              bgColor='primary'
              href='#lineup'
            >
              The Lineup
            </Button>
            <Button href='#about'>About</Button>
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

      {/* Mobile Hamburger menu */}
      <Box
        display={['flex', 'none', 'none', 'none']}
        justifyContent='flex-start'
        alignItems='center'
        minH='4rem'
        onClick={handleToggle}
        mb='3'
        mt='-5'
      >
        {isOpen ? (
          <CloseIcon h='2.5em' w='2.2em' ml='5px' />
        ) : (
          <HamburgerIcon h='3.5em' w='3.5em' />
        )}
      </Box>
      <Box
        display={[isOpen ? 'flex' : 'none', 'none', 'none', 'none']}
        flexDir={['column', 'unset']}
        gap={['5px', '0']}
        mb='6'
        w='100%'
        sx={{
          a: {
            border: 'none',
            bg: 'none',
            justifyContent: 'flex-start',
            px: '0',
            py: '7',
            borderBottom: '1px dotted',
            fontSize: '18px',
            display: 'flex',
            w: '100%',
            borderRadius: 'none',
          },
          '& a:last-child': {
            borderBottom: 'none',
          },
        }}
      >
        <Button
          _hover={{ bgColor: 'primary' }}
          bgColor='primary'
          href='#lineup'
        >
          The Lineup
        </Button>
        <Button href='#about'>About</Button>
        <Button href='/register'>Register</Button>
      </Box>
    </Container>
  );
};
