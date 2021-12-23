import { Img } from '@chakra-ui/image';
import { Box, Container, Flex, List, ListItem, Text } from '@chakra-ui/layout';
import { FC } from 'react';

export const Brand: FC = () => {
  const brandList = [
    {
      link: '#',
      logo: '/assets/images/TGF.png',
    },
    {
      link: '#',
      logo: '/assets/images/Instrument-300x53.png',
    },
    {
      link: '#',
      logo: '/assets/images/Good.png',
    },
  ];

  return (
    <Box py='16' borderBottom='1px solid gray'>
      <Container maxW='lg'>
        <Flex
          flexDir={['column', 'row']}
          justifyContent='space-between'
          alignItems={['self-start', 'center']}
          gap='20px'
        >
          <Text
            color='#999'
            textTransform='uppercase'
            letterSpacing='0.06em'
            fontSize='15px'
          >
            PRESENTED BY:
          </Text>
          <Box>
            <List
              display='flex'
              justifyContent='center'
              alignItems='center'
              gap={['40px', '40px', '125px']}
              sx={{
                '& img': {
                  maxW: ['100%', '200px'],
                  maxH: '50px',
                },
              }}
            >
              {brandList.map((brand) => (
                <ListItem key={brand.logo}>
                  <a href={brand.link}>
                    <Img src={brand.logo} alt='brand' />
                  </a>
                </ListItem>
              ))}
            </List>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
