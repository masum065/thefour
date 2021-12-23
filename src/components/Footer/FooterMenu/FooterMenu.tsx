import { Box, Container, List, ListItem } from '@chakra-ui/layout';
import Link from 'next/link';

import { FC } from 'react';

export const FooterMenu: FC = () => {
  const footerMenuList = [
    {
      link: '#',
      name: 'Privacy Policy',
    },
    {
      link: '#',
      name: 'Terms of Use',
    },
    {
      link: '#',
      name: 'Code of Conduct',
    },
    {
      link: '#',
      name: 'Official Rules',
    },
    {
      link: '#',
      name: 'Submissions & Judging',
    },
  ];
  return (
    <Container color='white' maxW='lg'>
      <Box>
        <List
          display={['block', 'flex']}
          gap='15px'
          alignItems='center'
          sx={{
            li: {
              display: ['inline-block', 'block'],
              mr: ['30px', 0],
              fontSize: '17px',
              textDecoration: 'underline',
              transition: '.3s',
              _hover: { color: 'primary' },
            },
          }}
        >
          {footerMenuList.map((menu, index) => (
            <ListItem key={index}>
              <Link passHref href={menu.link}>
                <a>{menu.name}</a>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};
