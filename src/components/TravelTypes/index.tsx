import {
  Stack,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

interface TravelTypesProps {
  icon: string;
  text: string;
}

export function TravelTypes({ icon, text }: TravelTypesProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {isWideVersion ? (
        <Stack align="center" minWidth={135}>
          <Image src={icon} alt={text} w={85} h={85} mb="3" />
          <Text fontSize="xl" fontWeight={600}>
            {text}
          </Text>
        </Stack>
      ) : (
        <HStack align="center">
          <Text fontSize="xl" fontWeight={600} color='yellow.500'>
              •
          </Text>
          <Text fontSize="sm" fontWeight={600}>
            {text}
          </Text>
        </HStack>
      )}
    </>
  );
}
