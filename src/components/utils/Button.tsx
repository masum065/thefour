import Link, { LinkProps } from 'next/link';
import { Button as ChakraBtn, ButtonProps } from '@chakra-ui/react';

type Props = ButtonProps & LinkProps;

export const Button = ({
  href,
  children,
  prefetch = true,
  ...props
}: Props) => {
  return (
    <Link href={href} passHref prefetch={prefetch}>
      <ChakraBtn
        border='1px solid'
        borderRadius='50px'
        padding='6px 25px'
        fontSize='18px'
        fontWeight='100'
        mr='10px'
        _hover={{
          bgColor: 'black',
          color: 'white',
        }}
        as='a'
        {...props}
      >
        {children}
      </ChakraBtn>
    </Link>
  );
};
