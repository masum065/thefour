import { Box, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from '@chakra-ui/system';
import { usePrefersReducedMotion } from '@chakra-ui/media-query';

export const TopMainMarquee: FC = () => {
  const marquee = keyframes`
  from { transform: translate(0, 0); }
  to { transform: translate(-100%, 0); }
`;

  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${marquee} infinite 20s linear`;
  return (
    <Box
      whiteSpace='nowrap'
      overflow='hidden'
      boxSize='border-box'
      borderBottom='1px solid'
    >
      {[...Array(10)].map((item, index) => (
        <Text
          key={index}
          animation={animation}
          display='inline-block'
          py='12px'
          fontSize='18px'
          sx={{ svg: { color: 'primary', mx: '15px', fontsize: '0.9em' } }}
        >
          February 3-4, 2022 <FontAwesomeIcon icon={faCircle} />
          Online and Anywhere
          <FontAwesomeIcon icon={faCircle} />
        </Text>
      ))}
    </Box>
  );
};
