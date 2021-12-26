import { Box, Text } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/react';
import { MdFiberManualRecord } from 'react-icons/md';

interface Props {
  title: string;
  bgColor: string;
}

export const EntryHeader = ({ title, bgColor }: Props) => {
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
          fontSize={['16px', '14px']}
          letterSpacing='0.05em'
          sx={{
            '& svg': {
              mr: 2,
              marginBottom: '-3px',
              fontSize: '1.3em',
              display: 'inline-block',
            },
          }}
        >
          <MdFiberManualRecord />
          {title}
        </Text>
      </Container>
    </Box>
  );
};
