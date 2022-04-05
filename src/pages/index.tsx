import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Flex, Grid, Box, Text, Image, Center, Divider, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';

import { SlideItem } from '../components/SlideItem';
import { ListTravelTypes } from '../components/TravelTypes/ListTravelTypes';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import api from '../services/api';

interface ContinentData {
  id: string;
  name: string;
  description: string;
  bannerImage: string;
}

export default function Home() {
  const [continents, setContinents] = useState<ContinentData[]>([]);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  useEffect(() => {
    async function loadContinentData() {
      const response = await api.get('/continents');
      setContinents(response.data);
    }

    loadContinentData();
  }, []);

  return (
    <>
      <Head>
        <title>Home - World Trip</title>
      </Head>

      <Flex
        h={[163, 325]}
        p='8'
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
              fontSize={['xl', '4xl']}
              color="gray.50"
              fontWeight={500}
            >
              6 Continentes, <br /> infinitas possibilidades.
            </Text>
            <Text fontSize={['sm','lg']} color="gray.100" mt={['2','4']}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          {isWideVersion && <Image src="/airplane.svg" alt="Yellow Airplane" mt="10%" />}

        </Flex>
      </Flex>

      {isWideVersion ? ( 
        <Flex align="center" justify="space-between" p="6% 10% 3%">
          <ListTravelTypes />
        </Flex>
      ) : (
          <Grid templateColumns='repeat(2, 1fr)' gap='2' p="5% 8% 0">
          <ListTravelTypes />
        </Grid>
      )}

      <Center py={['6', '8']}>
        <Divider orientation="horizontal" h={[0, 1]} w={90} bg="gray.900" />
      </Center>

      <Flex justify="center" textAlign="center" py="2">
        <Text as="h2" fontSize={["xl", "3xl"]} fontWeight={500}>
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Flex>

      <Box w="100%" p={['5% 0', '3% 10%']} color="white" textAlign='center'>
        <Swiper
          navigation={true}
          pagination={true}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard]}
        >

          {continents && continents.map(continent => (
            <SwiperSlide key={continent.id}>
              <SlideItem
                id={continent.id}
                name={continent.name}
                description={continent.description}
                bannerImage={continent.bannerImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
