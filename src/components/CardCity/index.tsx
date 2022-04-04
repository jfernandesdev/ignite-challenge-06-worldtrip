import { Box, Image, Flex, Stack, VStack, Text } from '@chakra-ui/react';
import CountryFlag from 'react-country-flag';

interface CardCityProps {
  city: {
    cityImage: string;
    cityName: string;
    countryName: string;
    countryCode: string;
  }
}

export function CardCity({ city }: CardCityProps) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      borderColor="rgba(255, 186, 8, 0.5)"
    >
      <Image
        src={city.cityImage}
        alt={city.cityName}
        h={173}
        w="100%"
        objectFit="cover"
      />

      <Flex justify="space-between" align="center" p="4">
        <VStack alignItems="left">
          <Text fontWeight={600} fontSize="2xl">
            {city.cityName}
          </Text>

          <Text as="span" color="gray.200" fontSize="md">
            {city.countryName}
          </Text>
        </VStack>

        <Stack>
          <CountryFlag
            countryCode={city.countryCode}
            svg
            style={{
              width: '30px',
              height: '30px',
              objectFit: 'cover',
              borderRadius: '100%',
            }}
            aria-label={city.countryName}
            title={city.countryName}
          />
        </Stack>
      </Flex>
    </Box>
  );
}