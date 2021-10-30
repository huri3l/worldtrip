import { Image } from '@chakra-ui/image';
import { Flex, Stack, Text } from '@chakra-ui/layout';

interface CityCardProps {
  name: string;
  image: string;
  country: {
    name: string;
    flag: {
      url: string;
      alt: string;
    };
  };
}

export function CityCard({ name, image, country }: CityCardProps) {
  return (
    <Flex direction="column" w="256px" h="279px">
      <Image h="173px" objectFit="cover" src={image} alt="Foto de Londres" borderTopRadius="4px" />
      <Flex
        px="24px"
        justify="space-between"
        align="center"
        flex="1"
        border="1px"
        borderColor="yellow.300"
        borderBottomRadius="4px"
        borderTop="none"
      >
        <Stack spacing="12px">
          <Text fontFamily="Barlow" fontWeight="semibold" fontSize="xl" color="gray.900">
            {name}
          </Text>
          <Text fontFamily="Barlow" fontWeight="medium" fontSize="md" color="gray.500">
            {country.name}
          </Text>
        </Stack>
        <Image
          boxSize="30px"
          objectFit="cover"
          borderRadius="50%"
          src={country.flag.url}
          alt={country.flag.alt}
        />
      </Flex>
    </Flex>
  );
}
