import { useRouter } from 'next/router';
import Link from 'next/link';
import { Flex, Icon, Image } from '@chakra-ui/react'; 
import { FiChevronLeft  } from 'react-icons/fi';

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1200}
      h='20'
      mx='auto'
      align='center'
      justify='space-between'
      >
      
      {(asPath !== '/') ? (
        <Link href='/'>
          <Icon as={FiChevronLeft} w={8} h={8}  cursor='pointer'/>
        </Link>
      ) : <Flex />}

      <Image src='/logo-worldtrip.svg' alt='World Trip'/>
      <Flex />
    </Flex>
  )
}