import { Box, Container, Flex, List, ListItem } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

export const Social: FC = () => {
  const socialList = [
    {
      link: '#',
      icon: faTwitter,
    },
    {
      link: '#',
      icon: faInstagram,
    },
    {
      link: '#',
      icon: faYoutube,
    },
  ];
  return (
    <Container color='white' maxW='lg'>
      <Flex py='10' justifyContent='space-between'>
        <Box>
          <List
            display='flex'
            gap='30px'
            alignItems='center'
            sx={{
              svg: {
                fontSize: '25px',
                transition: '.3s',
                _hover: { color: 'primary' },
              },
            }}
          >
            {socialList.map((social, index) => (
              <ListItem key={index}>
                <a href={social.link}>
                  <FontAwesomeIcon icon={social.icon} />
                </a>
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
