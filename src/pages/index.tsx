import Head from 'next/head';
import { Flex, Box, Text, Image, Center, Divider } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';

import { SlideItem } from '../components/SlideItem';
import { TravelTypes } from '../components/TravelTypes';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - World Trip</title>
      </Head>

      <Flex
        h={325}
        bgImg="/sky-background.svg"
        bgColor="#002039"
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
              6 Continentes, <br /> infinitas possibilidades.
            </Text>
            <Text fontSize="lg" color="gray.100" mt="4">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Image src="/airplane.svg" alt="Yellow Airplane" mt="10%" />
        </Flex>
      </Flex>

      <Flex align="center" justify="space-between" p="6% 10% 3%">
        <TravelTypes icon="/cocktail.svg" text="vida noturna" />
        <TravelTypes icon="/beach.svg" text="praia" />
        <TravelTypes icon="/building.svg" text="moderno" />
        <TravelTypes icon="/museum.svg" text="clássico" />
        <TravelTypes icon="/earth.svg" text="e mais..." />
      </Flex>

      <Center py={50}>
        <Divider orientation="horizontal" h={1} w={90} bg="gray.900" />
      </Center>

      <Flex justify="center" textAlign="center" py="2">
        <Text as="h2" fontSize="3xl" fontWeight={500}>
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Flex>

      <Box w="100%" p="3% 10%" color="white">
        <Swiper
          navigation={true}
          pagination={true}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard]}
        >

          <SwiperSlide>
            <SlideItem
              slug='europe'
              name='Europa'
              description='O continente mais antigo'
              imageUrl='https://source.unsplash.com/EXdXLrZXS9Q'
            />
          </SwiperSlide>

          <SwiperSlide>
            <SlideItem 
              slug='asia'
              name='Asia'
              description='O mais extenso e mais populoso continente do mundo'
              imageUrl='https://source.unsplash.com/WHhbYArwFt8'
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
