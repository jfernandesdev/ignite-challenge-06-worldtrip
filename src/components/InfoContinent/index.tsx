import { Flex, Text, Tooltip, Button } from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

interface InfoContinentProps {
  amountInfo: number;
  infoDescription: string;
  tooltip?: string;
}

export function InfoContinent({
  amountInfo,
  infoDescription,
  tooltip,
}: InfoContinentProps) {
  return (
    <Flex direction="column" alignItems='center'>
      <Text
        as="span"
        fontSize={["2xl", "5xl"]}
        lineHeight="1"
        fontWeight={600}
        color="yellow.500"
      >
        {amountInfo}
      </Text>

      <Text fontSize={["sm", "2xl"]} fontWeight={[400, 600]} display="flex" alignItems="center">
        {infoDescription}

        {!!tooltip && (
          <Tooltip hasArrow label={tooltip} bg="gray.100" color="black">
            <Button variant="unstyled" color="gray.200" p={"0 5px"} height='auto'>
              <RiInformationLine />
            </Button>
          </Tooltip>
        )}
      </Text>
    </Flex>
  );
}
