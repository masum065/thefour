import { Box, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from '@chakra-ui/system';
import { usePrefersReducedMotion } from '@chakra-ui/media-query';
import Link from 'next/link';

export const RegisterMarquee: FC = () => {
  const marquee = keyframes`
  from { transform: translate(-100%, 0); }
  to { transform: translate(0, 0); }
`;

  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${marquee} infinite 5s linear`;
  return (
    <Box whiteSpace='nowrap' overflow='hidden' boxSize='border-box'>
      {[...Array(30)].map((item, index) => (
        <Text
          bgImage='/assets/images/circle-logo.svg'
          bgPos='left center'
          bgSize='contain'
          bgRepeat='no-repeat'
          key={index}
          animation={animation}
          display='inline-block'
          py='5px'
          pl='60px'
          mx='2'
          my='5'
          fontSize='1.35em'
          sx={{
            svg: { mr: '30px', ml: '10px', fontsize: '0.9em' },
            a: { textDecoration: 'underline' },
          }}
        >
          <Link href='/register'>
            <a>Register Now</a>
          </Link>
          <FontAwesomeIcon icon={faArrowRight} />
        </Text>
      ))}
    </Box>
  );
};
