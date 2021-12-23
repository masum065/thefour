import { Box, Container, Text } from '@chakra-ui/layout';
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
  {
    name: 'Reyna Cohan',
    type: 'MOVEMENT',
    color: 'black',
    image: '/assets/images/Reyna-Cohan-1.jpg',
    bio: 'Yoga teacher and influencer dedicated to making the health and wellness spaces more inclusive and accessible.',
  },
  {
    name: 'More Coming Soon',
    type: 'MORE',
    color: 'black',
    image: '/assets/images/circle.jpg',
    bio: 'Stay tuned for more experts, performers, and other special guests.',
  },
];

const bgStars = {
  pos: 'absolute',
  content: "''",
  left: '-5.5vw',
  top: '45px',
  height: '100%',
  width: '100%',
  maxW: '280px',
  maxHeight: '320px',
  bgSize: 'contain',
  bgRepeat: 'no-repeat',
  zIndex: -1,
  bgImage: '/assets/images/black-stars-tall.png',
};
export const LineUp: FC = () => {
  return (
    <section>
      <Box bgColor='primary'>
        {/* Rotate Text */}
        <Text
          transform='rotate(270deg) translateX(-50%)'
          pos='absolute'
          zIndex='9'
          bottom='50%'
          left='0%'
        >
          The Festival Of
        </Text>
        <Text
          transform='rotate(90deg) translateX(50%)'
          pos='absolute'
          zIndex='9'
          left='auto'
          bottom='50%'
          right='0%'
        >
          Urgent Reinventions
        </Text>

        <EntryHeader bgColor='primary' title='The Lineup' />
        <Container
          pos='relative'
          py='32'
          maxW='lg'
          zIndex='2'
          _before={{
            ...bgStars,
          }}
          _after={{
            ...bgStars,
            left: 'auto',
            right: '-5.5vw',
            display: ['none', ''],
          }}
        >
          <Grid
            pos='relative'
            zIndex='2'
            _before={{
              ...bgStars,
              top: 'auto',
              bottom: '-80px',
              left: '-6.5vw',
            }}
            _after={{
              ...bgStars,
              left: 'auto',
              top: 'auto',
              bottom: '-80px',
              right: '-6.5vw',
              display: ['none', ''],
            }}
            sx={{
              '& >div:nth-of-type(odd)': { marginRight: '0' },
              '& div:last-child': {
                borderLeft: '1px solid gray',
                marginLeft: '-1px',
              },
            }}
            bgColor='black'
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
          >
            {speakers.map((speaker) => (
              <Card speaker={speaker} key={speaker.name} />
            ))}
          </Grid>
        </Container>
      </Box>
    </section>
  );
};
