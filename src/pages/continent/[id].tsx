import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';

import { CardCity } from '../../components/CardCity';
import { InfoContinent } from '../../components/InfoContinent';

import api from '../../services/api';

interface Continent {
  id: string;
  name: string;
  text: string;
  bannerImage: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  amountMostPopularCities: number;
  mostPopularCities: {
    cityName: string;
    countryName: string;
    countryCode: string;
    cityImage: string;
  }[];
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name} - World Trip</title>
      </Head>

      <Flex
        h={500}
        padding="5% 8%"
        align="flex-end"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        bgImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${continent.bannerImage})`}
      >
        <Text
          as="h2"
          fontSize={['2xl', '4xl']}
          color="gray.50"
          fontWeight={700}
          mb="2"
        >
          {continent.name}
        </Text>
      </Flex>

      <Grid p="5% 8% 3%" templateColumns="repeat(2, 1fr)" gap="8">
        <GridItem>
          <Text fontSize="2xl" align="justify">
            {continent.text}
          </Text>
        </GridItem>

        <Flex alignItems="center" justify="space-around">
          <InfoContinent
            amountInfo={continent.numberOfCountries}
            infoDescription="países"
          />

          <InfoContinent
            amountInfo={continent.numberOfLanguages}
            infoDescription="línguas"
          />

          <InfoContinent
            amountInfo={continent.amountMostPopularCities}
            infoDescription="cidades +100"
            tooltip='As "cidades +100" são as cidades que este continente possui que estão entre as cem cidades mais visitadas do mundo.'
          />
        </Flex>
      </Grid>

      <Flex direction="column" p="0% 8% 3%">
        <Text fontSize="3xl" fontWeight={500} mb="8">
          Cidades +100
        </Text>

        <Grid templateColumns="repeat(4, 1fr)" gap="8">
          {continent.mostPopularCities.map((city, i) => (
            <CardCity key={i} city={city} />
          ))}
        </Grid>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ctx => {
  const { data } = await api.get('continents', {
    params: {
      _limit: 2,
    },
  });

  const paths = data.map(continent => {
    return {
      params: {
        id: continent.id,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { id } = params;
    const response = await api.get(`continents/${id}`);

    const continent: Continent = {
      id: response.data.id,
      name: response.data.name,
      text: response.data.text,
      bannerImage: response.data.bannerImage,
      numberOfCountries: response.data.numberOfCountries,
      numberOfLanguages: response.data.numberOfLanguages,
      amountMostPopularCities: response.data.amountMostPopularCities,
      mostPopularCities: response.data.mostPopularCities,
    };

    return {
      props: { continent },
      revalidate: 60 * 60 * 24, // 24hrs
    };
  } catch {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
