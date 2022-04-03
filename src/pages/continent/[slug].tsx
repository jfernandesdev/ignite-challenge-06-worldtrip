import {
  Flex,
  Grid,
  GridItem,
  Text,
  Tooltip,
  Button,
  Box,
  Stack,
  VStack,
  Image,
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

import CountryFlag from 'react-country-flag';

export default function Continent() {
  return (
    <>
      <Flex
        h={500}
        padding="5% 8%"
        align="flex-end"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        bgImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('https://source.unsplash.com/EXdXLrZXS9Q')`}
      >
        <Text
          as="h2"
          fontSize={['2xl', '4xl']}
          color="gray.50"
          fontWeight={700}
          mb="2"
        >
          Europa
        </Text>
      </Flex>

      <Grid p="5% 8% 3%" templateColumns="repeat(2, 1fr)" gap="8">
        <GridItem>
          <Text fontSize="2xl" align="justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </GridItem>

        <Flex alignItems="center" justify="space-around">
          <Flex direction="column" textAlign="center">
            <Text
              as="span"
              fontSize="5xl"
              lineHeight="1"
              fontWeight={600}
              color="yellow.500"
            >
              50
            </Text>
            <Text fontSize="2xl" fontWeight={600}>
              países
            </Text>
          </Flex>

          <Flex direction="column" textAlign="center">
            <Text
              as="span"
              fontSize="5xl"
              lineHeight="1"
              fontWeight={600}
              color="yellow.500"
            >
              60
            </Text>
            <Text fontSize="2xl" fontWeight={600}>
              línguas
            </Text>
          </Flex>

          <Flex direction="column" textAlign="center">
            <Text
              as="span"
              fontSize="5xl"
              lineHeight="1"
              fontWeight={600}
              color="yellow.500"
            >
              27
            </Text>

            <Text
              fontSize="2xl"
              fontWeight={600}
              display="flex"
              alignItems="center"
            >
              cidades +100
              <Tooltip
                hasArrow
                label='As "cidades +100" são as cidades que este continente possui que estão entre as cem cidades mais visitadas do mundo.'
                bg="gray.100"
                color="black"
              >
                <Button variant="unstyled" color="gray.200" p="5px">
                  <RiInformationLine />
                </Button>
              </Tooltip>
            </Text>
          </Flex>
        </Flex>
      </Grid>

      <Flex direction="column" p="0% 8% 3%">
        <Text fontSize="3xl" fontWeight={500} mb="8">
          Cidades +100
        </Text>

        <Grid templateColumns="repeat(4, 1fr)" gap="8">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <Box
                key={i}
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
                borderColor='rgba(255, 186, 8, 0.5)'
              >
                <Image
                  src="https://source.unsplash.com/Ab9vQBR6f8E"
                  alt="Londres"
                />

                <Flex justify='space-between' align='center' p="4">
                  <VStack>
                    <Text fontWeight={600} fontSize='2xl'>
                      Londres
                    </Text>

                    <Text as="span" color="gray.200" fontSize="md">
                      Reino Unido
                    </Text>
                  </VStack>

                  <Stack>
                    <CountryFlag 
                      countryCode='GB' 
                      svg
                      style={{
                        width: '30px',
                        height: '30px',
                        objectFit: 'cover',
                        borderRadius: '100%',
                      }}
                      aria-label="Reino Unido"
                      title="Reino Unido"
                    />
                  </Stack>
                </Flex>
              </Box>
            ))}
        </Grid>
      </Flex>
    </>
  );
}
