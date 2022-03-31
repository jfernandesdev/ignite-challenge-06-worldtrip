import Head from 'next/head';

import { Flex, Box, Text, Image } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | World Trip</title>
      </Head>

      <Flex
        bgImg="/sky-background.svg"
        w="100%"
        justify="center"
        h={325}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex maxWidth={1480} px="6" align="center" justify="space-between">
          <Box maxWidth={450} mr="8">
            <Text
              as="h1"
              fontSize={['2xl', '4xl']}
              color="gray.50"
              fontWeight={500}
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Text>
            <Text fontSize="lg" color="gray.100" mt="4">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
            </Text>
          </Box>

          <Image src="/airplane.svg" alt="Yellow Airplane" mt="17%" />
        </Flex>
      </Flex>

      
    </>
  );
}
