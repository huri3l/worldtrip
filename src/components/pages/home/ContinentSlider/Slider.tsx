import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Continent as ContinentType } from '../../../../types/home';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SliderProps {
  slides: ContinentType[];
}

export function Slider({ slides }: SliderProps) {
  return (
    <Flex w="100%" h={['250px', '450px']} maxW="1240px" mx="auto" mb={['5', '10']}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.slug}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url(${slide.image.url})`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`/continentes/${slide.slug}`}>
                <a>
                  <Heading fontSize={['3xl', '4xl', '5xl']} color="gray.100" fontWeight="bold">
                    {slide.name}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="gray.300"
                    fontSize={['0.8rem', '1xl', '2xl']}
                    mt={['2', '4']}
                  >
                    {slide.description}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
