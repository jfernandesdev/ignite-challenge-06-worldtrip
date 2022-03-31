import { useRouter } from 'next/router';
import { Flex, Link, Icon, Image } from '@chakra-ui/react'; 
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
        <Link href='/' w={8} h={8}>
          <Icon as={FiChevronLeft} w={8} h={8} />
        </Link>
      ) : <Flex />}

      <Image src='/logo-worldtrip.svg' alt='World Trip'/>
      <Flex />
    </Flex>
  )
}