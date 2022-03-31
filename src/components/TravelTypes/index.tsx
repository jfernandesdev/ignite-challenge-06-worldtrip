import { Stack, Image, Text } from '@chakra-ui/react';

interface TravelTypesProps {
  icon: string;
  text: string;
}

export function TravelTypes({icon, text}: TravelTypesProps) {
  return (
    <Stack align='center' minWidth={135}>
      <Image src={icon} alt={text} w={85} h={85} mb='3' />
      <Text fontSize='xl'  fontWeight={600} >{text}</Text>
    </Stack>
  )
}