import { Button } from '@chakra-ui/button';
import { Box, Container, Heading, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import { EntryHeader } from '../utils/EntryHeader';

export const Schedule: FC = () => {
  return (
    <section>
      <EntryHeader bgColor='white' title="WHAT'S HAPPENING" />
      <Container maxW='lg'>
        <Box py='20'>
          <Heading
            fontSize={['4.7em', '5.7em']}
            lineHeight='1'
            letterSpacing='-0.03em'
          >
            2 Days. 4 Briefs. 40k in prizes.
          </Heading>
          <Text
            my='10'
            pr={['0', '10']}
            fontSize={['22px', '30px']}
            lineHeight='1.5em'
            fontWeight='500'
          >
            What to expect in February: Day one contains keynotes, the first two
            briefs, and the first chance to jam on your ideas. A break for
            mindfulness and a taste of music will keep things loose. Day two has
            more keynotes and the remaining briefs ahead of the final work
            session. Enjoy a creative breakout and more music before wrapping
            things up.
          </Text>
          <Button
            _hover={{ bgColor: 'black' }}
            bgColor='black'
            color='white'
            minW={['200px', '300px']}
            borderRadius='50px'
            padding='28px 50px'
            letterSpacing='.8px'
            fontSize='20px'
            href='/about'
          >
            About The Event
          </Button>
        </Box>
      </Container>
    </section>
  );
};
