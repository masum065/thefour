import { Container, Text } from '@chakra-ui/layout';

export const Declaimer = () => {
  return (
    <Container pt='4' pb='12' color='#999' maxW='lg'>
      <Text fontSize='15px' sx={{ '& a': { textDecoration: 'underline' } }}>
        For sponsorship inquiries,{' '}
        <a href='#'> please contact our Partnership Team</a>
      </Text>
      <Text fontSize='15px' sx={{ '& a': { textDecoration: 'underline' } }}>
        For press inquiries, <a href='#'>please contact us here</a> ✌️
      </Text>

      <Text pt='6'>
        PLEASE NOTE THAT PARTICIPATION IN THE FESTIVAL OF URGENT REINVENTIONS
        SHALL BE SUBJECT TO THE TERMS OF THE APPLICABLE OFFICIAL RULES OF SUCH
        EVENT, WHICH SHALL BE MADE AVAILABLE TO ENTRANTS PRIOR TO THE BEGINNING
        OF THE COMPETITION PERIOD. IN THE EVENT OF ANY CONFLICT BETWEEN THE
        TERMS OF SUCH OFFICIAL RULES AND THE TERMS OF USE OF THIS WEBSITE, THE
        TERMS OF THE OFFICIAL RULES SHALL CONTROL.
      </Text>

      <Text fontSize='15px' mt='6'>
        © 2021-2022 The Festival Of Urgent Reinventions. All Rights Reserved.
      </Text>
    </Container>
  );
};
