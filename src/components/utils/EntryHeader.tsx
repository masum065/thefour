import { Box, Text } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/react';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

interface Props {
  title: string;
  bgColor: string;
}

export const EntryHeader: FC<Props> = ({ title, bgColor }) => {
  return (
    <Box
      bgColor={bgColor}
      borderTop='1px solid'
      borderBottom='1px solid'
      position='sticky'
      py='3'
      top='0'
      zIndex='999'
    >
      <Container maxW='lg'>
        <Text
          textTransform='uppercase'
          fontSize='14px'
          letterSpacing='0.05em'
          sx={{ '& svg': { mr: 2 } }}
        >
          <FontAwesomeIcon icon={faCircle} /> {title}
        </Text>
      </Container>
    </Box>
  );
};
