import Link from 'next/link';
import { Flex, Text } from '@chakra-ui/react';

interface SlideItemProps {
  id: string;
  name: string;
  description: string;
  bannerImage: string;
}

export function SlideItem({ id, bannerImage, name, description}: SlideItemProps) {
  return (
    <Link href={`continent/${id}`}>
      <Flex
        h={[250, 450]}
        align="center"
        justify="center"
        direction="column"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        bgImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('${bannerImage}')`}
        style={{ textDecoration: 'none' }}
        cursor='pointer'
      >
        <Text
          as="h2"
          fontSize={['2xl', '4xl']}
          color="gray.50"
          fontWeight={700}
          mb="2"
        >
         {name}
        </Text>

        <Text fontSize={['sm', 'xl']} color="gray.100" fontWeight={700} maxWidth={'90%'}>
          {description}
        </Text>
      </Flex>
    </Link>
  )
}