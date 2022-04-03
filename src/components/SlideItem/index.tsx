import { Link, Flex, Text } from '@chakra-ui/react';

interface SlideItemProps {
  slug: string;
  imageUrl: string;
  name: string;
  description: string;
}

export function SlideItem({ slug, imageUrl, name, description}: SlideItemProps) {
  return (
    <Link href={`continent/${slug}`} style={{ textDecoration: 'none' }}>
      <Flex
        h={450}
        align="center"
        justify="center"
        direction="column"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        bgImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('${imageUrl}')`}
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

        <Text fontSize={'xl'} color="gray.100" fontWeight={700}>
          {description}
        </Text>
      </Flex>
    </Link>
  )
}