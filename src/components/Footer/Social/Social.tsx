import { Box, Container, Flex, List, ListItem } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

export const Social = () => {
  const socialList = [
    {
      link: '#',
      icon: <BsTwitter />,
    },
    {
      link: '#',
      icon: <BsInstagram />,
    },
    {
      link: '#',
      icon: <BsYoutube />,
    },
  ];
  return (
    <Container color='white' maxW='lg'>
      <Flex py='10' justifyContent='space-between'>
        <Box>
          <List
            display='flex'
            alignItems='center'
            sx={{
              '& li': {
                marginRight: '20px',
              },
              svg: {
                fontSize: '25px',
                transition: '.3s',
                _hover: { color: 'primary' },
              },
            }}
          >
            {socialList.map((social, index) => (
              <ListItem key={index}>
                <a href={social.link}>{social.icon}</a>
              </ListItem>
            ))}
          </List>
        </Box>

        <Text fontSize='1.2em' textTransform='uppercase'>
          #FOUR2022
        </Text>
      </Flex>
    </Container>
  );
};
