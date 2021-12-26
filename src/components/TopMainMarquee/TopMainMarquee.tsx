import { Box, Text } from '@chakra-ui/layout';
import { keyframes } from '@chakra-ui/system';
import { usePrefersReducedMotion } from '@chakra-ui/media-query';
import { MdFiberManualRecord } from 'react-icons/md';
import { useHasMounted } from '../utils/hasMounted';

export const TopMainMarquee = () => {
  const hasMounted = useHasMounted();

  const marquee = keyframes`
  from { transform: translate(0, 0); }
  to { transform: translate(-100%, 0); }
`;

  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${marquee} infinite 20s linear`;

  if (!hasMounted) {
    return null;
  }
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
          display='inline-flex'
          py='12px'
          fontSize='18px'
          sx={{
            svg: {
              color: 'primary',
              marginRight: '15px',
              marginLeft: '15px',
              display: 'inline-block',
              fontSize: '1.4em',
            },
          }}
        >
          February 3-4, 2022 <MdFiberManualRecord />
          Online and Anywhere
          <MdFiberManualRecord />
        </Text>
      ))}
    </Box>
  );
};
