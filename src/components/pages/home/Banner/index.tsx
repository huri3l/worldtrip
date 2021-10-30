import { Flex, Text, Heading, Image } from '@chakra-ui/react';
import { Banner as BannerType } from '../../types/home';

interface BannerProps {
  banner: BannerType;
}

export function Banner({ banner }: BannerProps) {
  return (
    <Flex
      h={['163px', '250px', '250px', '335px']}
      bgImage={`url(${banner.images.background.url})`}
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="100%"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
        <div>
          <Heading
            as="h2"
            color="gray.100"
            mb={8}
            fontWeight="medium"
            fontSize={['xl', '2l', '2xl', '2xl', '4xl']}
          >
            {banner.title.split(',')[0]},
            <br />
            {banner.title.split(',')[1]}
          </Heading>
          <Text
            fontSize={['0.8rem', 'xl']}
            color="gray.300"
            maxW={['100%', '100%', '100%', '550px']}
          >
            {banner.description}
          </Text>
        </div>
        <Image
          src={banner.images.airplane.url}
          alt={banner.images.airplane.alt}
          ml="auto"
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          transform="translateY(48px)"
        />
      </Flex>
    </Flex>
  );
}
