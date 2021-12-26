import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import { Button } from '../utils/Button';
import { EntryHeader } from '../utils/EntryHeader';

export const Entry = () => {
  return (
    <section>
      <EntryHeader title='overview' bgColor='white' />
      <Container maxW='lg'>
        <Flex mt='10' justifyContent='space-between'>
          <Text fontSize={['20px', '28px']} fontFamily='EB Garamond'>
            February 3-4, 2022
          </Text>
          <Text fontSize={['20px', '28px']} fontFamily='EB Garamond'>
            Save The Date
          </Text>
        </Flex>

        <Box pb='10'>
          <Text
            my='10'
            pr={['0', '10']}
            fontSize={['22px', '30px']}
            lineHeight='1.5em'
            fontWeight='500'
          >
            The Festival of Urgent Reinventions is a free two-day virtual event.
            Part conference and part competition, the festival will feature
            prominent speakers discussing the world’s most critical systemic
            issues and attendees creating their solutions. Join to invent, code,
            design, or build the path to a stronger community — and win $10,000
            to put towards it.
          </Text>
          <Button
            _hover={{ bgColor: 'black' }}
            bgColor='black'
            color='white'
            minW={['200px', '300px']}
            padding='28px 50px'
            letterSpacing='.8px'
            fontSize='20px'
            href='/register'
          >
            Register Now
          </Button>
        </Box>
      </Container>
    </section>
  );
};
