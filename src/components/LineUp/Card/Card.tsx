import { FC } from 'react';
import { Box, Text, Heading, Flex } from '@chakra-ui/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

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

export const Card: FC<Props> = ({ speaker }) => {
  const { name, type, image, bio, color } = speaker;
  return (
    <Box m='1px'>
      <Box
        borderRadius='15px'
        bgImage={image}
        h='580px'
        w='100%'
        bgSize='cover'
        bgPos='center center'
        bgRepeat='no-repeat'
        borderBottom='1px solid'
      />

      <Box bgColor={color ? color : 'black'}>
        <Heading
          fontSize='4.5em'
          letterSpacing='-0.04em'
          borderBottom='1px solid'
          fontWeight='700'
          lineHeight='0.8 !important'
          p='8'
          minH='180px'
        >
          {name}
        </Heading>
        <Flex
          minH='92px'
          justifyContent='space-between'
          gap='15px'
          py='4'
          px='8'
        >
          <Text maxW='70%' fontSize='.86em'>
            {bio}
          </Text>
          <Text
            fontSize='.88em'
            textTransform='uppercase'
            sx={{ svg: { mr: 2 } }}
          >
            <FontAwesomeIcon icon={faCircle} /> {type}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
