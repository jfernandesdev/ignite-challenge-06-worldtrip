import Head from 'next/head';

import { Flex, Box, Text, Image } from '@chakra-ui/react';

import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - World Trip</title>
      </Head>

      <Flex
        h={325}
        bgImg="/sky-background.svg"
        justify="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex align="center" justify="space-around" w="100%">
          <Box maxWidth={450}>
            <Text
              as="h1"
              fontSize={['2xl', '4xl']}
              color="gray.50"
              fontWeight={500}
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Text>
            <Text fontSize="lg" color="gray.100" mt="4">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Image src="/airplane.svg" alt="Yellow Airplane" mt="10%" />
        </Flex>
      </Flex>

      <Flex align="center" justify="space-between" p="6% 10%">
        <TravelTypes icon="/cocktail.svg" text="vida noturna" />
        <TravelTypes icon="/beach.svg" text="praia" />
        <TravelTypes icon="/building.svg" text="moderno" />
        <TravelTypes icon="/museum.svg" text="clássico" />
        <TravelTypes icon="/earth.svg" text="e mais..." />
      </Flex>
    </>
  );
}
