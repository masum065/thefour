import { Box, Text, Heading, Flex } from '@chakra-ui/layout';
import { MdFiberManualRecord } from 'react-icons/md';

interface Speaker {
  name: string;
  type: string;
  image: string;
  bio: string;
  color?: string;
}
interface Props {
  speaker: Speaker;
}

export const Card = ({ speaker }: Props) => {
  const { name, type, image, bio, color } = speaker;
  return (
    <Box m='1px' color={color === 'black' ? 'white' : 'black'}>
      <Box
        borderRadius='15px'
        bgImage={image}
        h='580px'
        w='100%'
        bgSize='cover'
        bgPos='center center'
        bgRepeat='no-repeat'
        borderBottom='1px solid'
        borderColor='black'
      />

      <Box bgColor={color ? color : 'black'}>
        <Heading
          fontSize={['3em', '2.5em', '4.5em']}
          letterSpacing='-0.04em'
          borderBottom='1px solid'
          fontWeight='700'
          lineHeight='0.8 !important'
          p='8'
          minH={['100px', '130px', '180px']}
          borderColor={color === 'black' ? 'gray' : 'black'}
        >
          {name}
        </Heading>
        <Flex
          minH='92px'
          justifyContent='space-between'
          gap='15px'
          py='4'
          px='8'
          flexDir={['column-reverse', 'row']}
        >
          <Text maxW='70%' fontSize='.86em'>
            {bio}
          </Text>
          <Text
            fontSize='.88em'
            textTransform='uppercase'
            sx={{
              svg: {
                mr: 2,
                display: 'inline-block',
                marginBottom: '-3px',
                fontSize: '1.3em',
              },
            }}
          >
            <MdFiberManualRecord /> {type}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
