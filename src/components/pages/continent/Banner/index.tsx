import { Flex, Heading } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      h={['150px', '225px', '300px', '500px']}
      bgImage={`url(/assets/europe.jpg)`}
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Heading
        as="h2"
        fontSize={['28px', '5xl']}
        fontWeight="semibold"
        color="gray.100"
        m={['auto', 'auto', 'auto', 'auto 0 58px 140px']}
      >
        Europa
      </Heading>
    </Flex>
  );
}
