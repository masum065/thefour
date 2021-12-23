import { Box, Container } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/react';
import { FC } from 'react';
import { EntryHeader } from '../utils/EntryHeader';
import { Card } from './Card/Card';

const speakers = [
  {
    name: 'Jessica Malaty Rivera',
    type: 'SPEAKER',
    color: 'blue',
    image: '/assets/images/jessica-malaty-rivera-1.jpg',
    bio: 'Epidemiologist focused on infectious disease, translating complex scientific concepts into accessible information.',
  },
  {
    name: 'Bronze Avery',
    type: 'MUSIC',
    color: 'pink',
    image: '/assets/images/Bronze-Avery.jpg',
    bio: 'Singer-songwriter pushing for inclusivity and representation in the music business — and society — through his brand of pop.',
  },
  {
    name: 'Frankie Simone',
    type: 'MUSIC',
    color: 'gray',
    image: '/assets/images/Frankie-Simone-1.jpg',
    bio: 'Alt-pop artist whose music echoes their staunch commitment to individuality, inclusivity, and community.',
  },
  {
    name: 'Sarah Mirk',
    type: 'CREATIVE',
    color: 'brown',
    image: '/assets/images/Sarah-Mirk.jpg',
    bio: 'Author, journalist, editor, and educator whose work explores themes of gender, politics, history, and activism.',
  },
];
export const LineUp: FC = () => {
  return (
    <Box bgColor='primary'>
      <EntryHeader bgColor='primary' title='The Lineup' />
      <Container my='28' maxW='lg'>
        <Grid
          sx={{ '& >div:nth-child(odd)': { marginRight: '0' } }}
          bgColor='black'
          templateColumns='repeat(2, 1fr)'
        >
          {speakers.map((speaker) => (
            <Card speaker={speaker} key={speaker.name} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
